<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import BackgroundGrid from "$lib/elements/backgroundGrid.svelte";
	import Logo from '$lib/elements/logo.svelte';
	import Grid from "$lib/components/grid.svelte";
	import Box from '$lib/elements/box.svelte';
	import List from '$lib/components/list.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<svelte:head>
    <title>Privacy Policy | Mistaek</title>
    <meta name="description" content="Privacy Policy for Mistaek Studio - How we collect, use, and protect your personal information." />
</svelte:head>

<BackgroundGrid />

<section class="container privacy-container" aria-labelledby="privacy_title">
	<Logo small />

	<Grid customClass="-cols-6 -gap-vm -items-hend">
		<Box customClass="col-6 col-start-1 md:col-3 md:col-start-1 -padding-vxl -gap-vs">
			<h1 id="privacy_title">Privacy Policy</h1>
		</Box>
	</Grid>
	<Grid customClass="-cols-6 -gap-vm -items-hstart">
		<aside class="col-6 col-start-1 md:col-2 md:col-start-1 -padding-vxl -gap-vs">
			<p class="body_text -large -subtle -contained-xl">Last updated:</p>
			<p class="body_text -large -contained-xl">September 23, 2025</p>
		</aside>
		<main class="col-6 col-start-1 md:col-4 md:col-start-3 -padding-vxl -gap-vs">

			<!-- INTRODUCTION -->
			<section class="-padding-vl -gap-vs">
				<p class="body_text -large">This Privacy Notice for <strong>Mistaek Studio Lda.</strong> (doing business as <strong>Mistaek</strong>) ('<strong>we</strong>', '<strong>us</strong>', or '<strong>our</strong>'), describes how and why we might access, collect, store, use, and/or share ('<strong>process</strong>') your personal information when you use our services ('<strong>Services</strong>'), including when you:</p>
				<List customClass="-gap-vs -with-bullets" vertical>
					<li><p class="body_text -large">Visit our website at <a href="https://www.mistaek.com">https://www.mistaek.com</a> or any website of ours that links to this Privacy Notice</p></li>
					<li><p class="body_text -large">Use Mistaek Studio. Design consultancy specialising in accessible, sustainable digital experiences for startups and growing companies. We provide strategic design services, branding, web development, and educational tools to help teams make informed decisions about their digital strategy and user experience.</p></li>
					<li><p class="body_text -large">Engage with us in other related ways, including any sales, marketing, or events</p></li>
				</List>
				<p class="body_text -large"><strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:hello@mistaek.com">hello@mistaek.com</a>.</p>
			</section>
			
			<!-- SUMMARY OF KEY POINTS -->
			<section class="-padding-vl -gap-vs">
				<h2 class="h3">Summary of Key Points</h2>
				<p class="body_text -large"><strong>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <a href="#toc">table of contents</a> below to find the section you are looking for.</strong></p>
				<List customClass="-gap-vs" vertical>
					<li><p class="body_text -large"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a href="#personalinfo">personal information you disclose to us</a>.</p></li>
					<li><p class="body_text -large"><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</p></li>
					<li><p class="body_text -large"><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p></li>
					<li><p class="body_text -large"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <a href="#infouse">how we process your information</a>.</p></li>
					<li><p class="body_text -large"><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about <a href="#whoshare">when and with whom we share your personal information</a>.</p></li>
					<li><p class="body_text -large"><strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <a href="#infosafe">how we keep your information safe</a>.</p></li>
					<li><p class="body_text -large"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a href="#privacyrights">your privacy rights</a>.</p></li>
					<li><p class="body_text -large"><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <a href="http://www.mistaek.com/unsubscribe">http://www.mistaek.com/unsubscribe</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p></li>
				</List>
				<p class="body_text -large">Want to learn more about what we do with any information we collect? <a href="#toc">Review the Privacy Notice in full</a>.</p>
			</section>
			
			<!-- TABLE OF CONTENTS -->
			<section id="toc" class="-padding-vl -gap-vs">
				<h2 class="h3">Table of Contents</h2>
				<ol class="list-decimal -gap-vs">
					<li><a href="#infocollect">WHAT INFORMATION DO WE COLLECT?</a></li>
					<li><a href="#infouse">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
					<li><a href="#legalbases">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a></li>
					<li><a href="#whoshare">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
					<li><a href="#cookies">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
					<li><a href="#inforetain">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
					<li><a href="#infosafe">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
					<li><a href="#infominors">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
					<li><a href="#privacyrights">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
					<li><a href="#DNT">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
					<li><a href="#uslaws">DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
					<li><a href="#policyupdates">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
					<li><a href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
					<li><a href="#request">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
				</ol>
			</section>

			<!-- 1. WHAT INFORMATION DO WE COLLECT? -->
			<section class="-padding-vl -gap-vs" id="infocollect">
				<h2 class="h4">1. What information do we collect?</h2>
				<h3 class="h6" id="personalinfo">Personal information you disclose to us</h3>
				<p class="body_text -large"><strong>In Short:</strong> We collect personal information that you provide to us.</p>
				<p class="body_text -large">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
				<p class="body_text -large"><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
				<List customClass="-gap-vs -with-bullets" vertical>
					<li><p class="body_text -large">Names</p></li>
					<li><p class="body_text -large">Email addresses</p></li>
					<li><p class="body_text -large">Company names</p></li>
				</List>
				<p class="body_text -large" id="sensitiveinfo"><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
				<p class="body_text -large">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
				
				<span class="spacer"></span>
				
				<h3 class="h6">Information automatically collected</h3>
				<p class="body_text -large"><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
				<p class="body_text -large">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
				<p class="body_text -large">Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Notice: <a href="https://mistaek.com/cookie-policy">https://mistaek.com/cookie-policy</a>.</p>
				<p class="body_text -large">The information we collect includes:</p>
				<List customClass="-gap-vs -with-bullets" vertical>
					<li><p class="body_text -large"><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).</p></li>
					<li><p class="body_text -large"><strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</p></li>
					<li><p class="body_text -large"><strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</p></li>
				</List>
			</section>

			<!-- 2. HOW DO WE PROCESS YOUR INFORMATION? -->
			<section class="-padding-vl -gap-vs" id="infouse">
				<h2 class="h4">2. How do we process your information?</h2>
				<p class="body_text -large"><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information for the following purposes listed below. We may also process your information for other purposes only with your prior explicit consent.</p>
				<p class="body_text -large"><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></p>

				<List customClass="-gap-vs -with-bullets" vertical>
					<li><p class="body_text -large"><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</p></li>
					<li><p class="body_text -large"><strong>To enable user-to-user communications.</strong> We may process your information if you choose to use any of our offerings that allow for communication with another user.</p></li>
					<li><p class="body_text -large"><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</p></li>
				</List>
			</section>

			<!-- 3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION? -->
			<section class="-padding-vl -gap-vs" id="legalbases">
				<h2 class="h4">3. What legal bases do we rely on to process your personal information?</h2>
				<p class="body_text -large"><strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</p>

				<span class="spacer"></span>
				<h3 class="h6"><strong>If you are located in the EU or UK, this section applies to you.</strong></h3>
				<p class="body_text -large">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
				<List customClass="-gap-vs -with-bullets" vertical>
					<li><p class="body_text -large"><strong>Consent.</strong> We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about <a href="#withdrawconsent">withdrawing your consent</a>.</p></li>
					<li><p class="body_text -large"><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</p></li>
					<li><p class="body_text -large"><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</p></li>
					<li><p class="body_text -large"><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</p></li>
				</List>

				<span class="spacer"></span>
				<h3 class="h6"><strong>If you are located in Canada, this section applies to you.</strong></h3>
				<p class="body_text -large">We may process your information if you have given us specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent). You can <a href="#withdrawconsent">withdraw your consent</a> at any time.</p>
				<p class="body_text -large">In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
				<List customClass="-gap-vs -with-bullets" vertical>
					<li><p class="body_text -large">If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</p></li>
					<li><p class="body_text -large">For investigations and fraud detection and prevention</p></li>
					<li><p class="body_text -large">For business transactions provided certain conditions are met</p></li>
					<li><p class="body_text -large">If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</p></li>
					<li><p class="body_text -large">For identifying injured, ill, or deceased persons and communicating with next of kin</p></li>
					<li><p class="body_text -large">If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</p></li>
					<li><p class="body_text -large">If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</p></li>
					<li><p class="body_text -large">If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</p></li>
					<li><p class="body_text -large">If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</p></li>
					<li><p class="body_text -large">If the collection is solely for journalistic, artistic, or literary purposes</p></li>
					<li><p class="body_text -large">If the information is publicly available and is specified by the regulations</p></li>
					<li><p class="body_text -large">We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments</p></li>
				</List>
			</section>

			<!-- 4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION? -->
			<section class="-padding-vl -gap-vs" id="whoshare">
				<h2 class="h4">4. When and with whom do we share your personal information?</h2>
				<p class="body_text -large"><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties</p>
				<p class="body_text -large"><strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents ('<strong>third parties</strong>') who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organisation apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.</p>
				<p class="body_text -large">The third parties we may share personal information with are as follows:</p>
				
				<span class="spacer -small"></span>
				<List customClass="-padding-none" vertical>
					<li><p class="body_text -large"><strong>Content Optimisation</strong></p></li>
				</List>
				<p class="body_text -large">Google Site Search</p>
				<span class="spacer -small"></span>
				<List customClass="-padding-none" vertical>
					<li><p class="body_text -large"><strong>Web and Mobile Analytics</strong></p></li>
				</List>
				<p class="body_text -large">Google Analytics</p>
				
				<span class="spacer"></span>
				<p class="body_text -large">We also may need to share your personal information in the following situations:</p>
				<List customClass="-gap-vs -with-bullets" vertical>
					<li><p class="body_text -large"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p></li>
					<li><p class="body_text -large"><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</p></li>
				</List>
			</section>

			<!-- 5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES? -->


			<!-- 6. HOW LONG DO WE KEEP YOUR INFORMATION? -->
			<section class="-padding-vl -gap-vs" id="inforetain">
				<h2 class="h4">6. How long do we keep your information?</h2>
				<p class="body_text -large"><strong>In Short:</strong> We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
				<p class="body_text -large">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 2 years.</p>
				<p class="body_text -large">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
			</section>

			<!-- 7. HOW DO WE KEEP YOUR INFORMATION SAFE? -->
			<section class="-padding-vl -gap-vs" id="infosafe">
				<h2 class="h4">7. How do we keep your information safe?</h2>
				<p class="body_text -large"><strong>In Short:</strong> We aim to protect your personal information through a system of organisational and technical security measures.</p>
				<p class="body_text -large">We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
			</section>

			<!-- 8. DO WE COLLECT INFORMATION FROM MINORS? -->
			<section class="-padding-vl -gap-vs" id="infominors">
				<h2 class="h4">8. Do we collect information from minors?</h2>
				<p class="body_text -large"><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.</p>
				<p class="body_text -large">We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at <a target="_blank" data-custom-class="link" href="mailto:hello@mistaek.com">hello@mistaek.com</a>.</p>
			</section>

			<!-- 9. WHAT ARE YOUR PRIVACY RIGHTS? -->


			<!-- 10. CONTROLS FOR DO-NOT-TRACK FEATURES -->
			<section class="-padding-vl -gap-vs" id="DNT">
				<h2 class="h4">10. Controls for do-not-track features</h2>
				<p class="body_text -large">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
				<p class="body_text -large">California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognising or honouring DNT signals, we do not respond to them at this time.</p>
			</section>

			<!-- 11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? -->


			<!-- 12. DO WE MAKE UPDATES TO THIS NOTICE? -->
			<section class="-padding-vl -gap-vs" id="policyupdates">
				<h2 class="h4">12. Do we make updates to this notice?</h2>
				<p class="body_text -large"><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
				<p class="body_text -large">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>
			</section>

			<!-- 13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? -->
			<section class="-padding-vl -gap-vs" id="contact">
				<h2 class="h4">13. How can you contact us about this notice?</h2>
				<p class="body_text -large">If you have questions or comments about this notice, you may email us at <a href="mailto:hello@mistaek.com">hello@mistaek.com</a>.</p>
			</section>

			<!-- 14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU? -->
			<section class="-padding-vl -gap-vs" id="request">
				<h2 class="h4">14. How can your review, update, or delete the data we collect from you?</h2>
				<p class="body_text -large">You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: <a href="http://www.mistaek.com/unsubscribe">http://www.mistaek.com/unsubscribe</a>.</p>
			</section>

		</main>
	</Grid>
</section>

<Footer/>

<style>
	section {
		display: flex;
		flex-direction: column;
	}

	:global(a) {
		padding: 0 !important;
		text-decoration: underline !important;
	}

	:global(ul.list.-with-bullets) {
		list-style: disc !important;
		padding-left: var(--space-600) !important;
	}
	:global(ul li) {
		display: list-item !important;
	}
</style>