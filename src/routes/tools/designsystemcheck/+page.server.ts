import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';
import { generateChecklistPDF } from '$lib/server/pdf';

const resend = new Resend(RESEND_API_KEY);

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export const actions: Actions = {
	submit: async ({ request }) => {
		try {
			const formData = await request.formData();
			const email = formData.get('email') as string;
			const companyName = formData.get('companyName') as string;
			const privacyAccepted = formData.get('privacyAccepted') === 'on';
			const score = parseInt(formData.get('score') as string);
			const resultTitle = formData.get('resultTitle') as string;
			const resultData = JSON.parse(formData.get('resultData') as string);
			
			// Server-side validation
			if (!email || !EMAIL_REGEX.test(email)) {
				return fail(400, { 
					error: 'Valid email address is required',
					email,
					companyName
				});
			}
			
			if (!privacyAccepted) {
				return fail(400, { 
					error: 'You must accept the privacy policy',
					email,
					companyName
				});
			}
			
			// Get selected items from result data
			const selectedItems = resultData.selectedItems || [];
			const selectedSet = new Set<string>(selectedItems);
			
			// Generate PDF using your existing function
			const pdfBytes = await generateChecklistPDF(selectedSet, score);
			
			// Convert Buffer/Uint8Array to base64 for Resend
			const pdfBase64 = Buffer.from(pdfBytes).toString('base64');
			
			// Send email with Resend
			const emailData = await resend.emails.send({
				from: 'André from Mistaek <andre@email.mistaek.com>', // Use your verified domain
				to: [email],
				subject: 'Your Design System Reality Check Results',
				html: generateEmailHTML(email, companyName, score, resultTitle),
				attachments: [
					{
						filename: 'design-system-action-plan.pdf',
						content: pdfBase64,
					},
				],
			});
			
			if (emailData.error) {
				console.error('Resend error:', emailData.error);
				return fail(500, { 
					error: 'Failed to send email. Please try again or contact us directly.',
					email,
					companyName
				});
			}
			
			// Log submission (you can add Google Sheets here later)
			console.log('New submission:', { 
				email, 
				companyName: companyName || 'N/A', 
				score, 
				resultTitle,
				timestamp: new Date().toISOString()
			});
			
			return { success: true };
			
		} catch (error) {
			console.error('Form submission error:', error);
			return fail(500, { 
				error: 'Something went wrong. Please try again later.'
			});
		}
	}
};

function generateEmailHTML(
	email: string, 
	companyName: string | undefined, 
	score: number, 
	resultTitle: string
): string {
	const greeting = companyName ? `at ${companyName}` : '';
	
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Design System Reality Check Results</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background-color: #000000; padding: 40px 32px; text-align: center;">
          <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Your Results Are In</h1>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 32px;">
          <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #333333;">
            Hey${greeting ? ` ${greeting}` : ''},
          </p>
          
          <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #333333;">
            Thanks for taking the Design System Reality Check. Based on your responses, here's what we found:
          </p>
          
          <div style="background-color: #f8f8f8; border-left: 4px solid #000000; padding: 20px; margin: 0 0 24px;">
            <h2 style="margin: 0 0 12px; font-size: 20px; font-weight: 600; color: #000000;">
              Your Score: ${score}/25
            </h2>
            <p style="margin: 0; font-size: 18px; color: #333333;">
              ${resultTitle}
            </p>
          </div>
          
          <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #333333;">
            Your custom action plan is attached to this email. It includes specific next steps based on where your team is right now.
          </p>
          
          <p style="margin: 0 0 32px; font-size: 16px; line-height: 1.6; color: #333333;">
            Want to talk through your results? <a href="https://cal.com/mistaek/15min" style="color: #000000; text-decoration: underline;">Book a 15-minute reality check call</a> and we'll figure out the best path forward together.
          </p>
          
          <!-- CTA Button -->
          <div style="text-align: center; margin: 0 0 32px;">
            <a href="https://cal.com/mistaek/15min" style="display: inline-block; background-color: #000000; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 600;">
              Book Your Reality Check Call
            </a>
          </div>
          
          <p style="margin: 0 0 8px; font-size: 16px; line-height: 1.6; color: #333333;">
            André
          </p>
          <p style="margin: 0; font-size: 14px; color: #666666;">
            Founder, Mistaek
          </p>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8f8f8; padding: 32px; text-align: center; border-top: 1px solid #e5e5e5;">
          <p style="margin: 0 0 16px; font-size: 14px; color: #666666;">
            Mistaek Studio<br>
            Making design matter for people and the planet
          </p>
          <p style="margin: 0; font-size: 12px; color: #999999;">
            You received this email because you completed the Design System Reality Check at mistaek.studio.
            <br>
            <a href="https://mistaek.studio/privacy-policy" style="color: #999999; text-decoration: underline;">Privacy Policy</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}