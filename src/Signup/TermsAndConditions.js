import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class TermsAndConditions extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.onToggle} className={this.props.className}>
                <form onSubmit={this.handleSubmit}>
                    <div className="modal-content">
                        <ModalHeader>Reset password</ModalHeader>
                        <ModalBody>
                            <div className="layoutArea">
                                <div className="column">
                                    <p>This Agreement, and the Services and Software provided hereunder, shall be subject to the following terms and conditions.</p>
                                    <ol>
                                        <li>
                                            <b>1. </b><b>D</b><b>EFINITIONS</b>
                                            <ol>
                                                <li><b>1.1 “Confidential Information” </b>means any confidential or proprietary information of a party that is disclosed to the other party. The terms of this Agreement shall be considered as Confidential Information. With respect to FLEXINETS, Confidential Information includes, but is not limited to, the Software, , and any technical documentation, specifications, or other information about the Service or FLEXINETS business practices that FLEXINETS provides Customer under this Agreement whether or not identified as confidential or proprietary. With respect to Customer, Confidential Information includes, but is not limited to, any information about Customer’s business practices (including but not limited to personal information of its employees or employees of Customer as defined in Appendix A and B) that Customer provides to FLEXINETS under this Agreement whether or not identified as confidential or proprietary.</li>
                                                <li><b>1.2 “End Users” </b>means persons authorized by Customer to use the Service, including Customer’s and Customer`s subsidiaries` employees and contractors, and other individual users.</li>
                                                <li><b>1.3 </b>“<b>Portal Service</b>” means the Radar portal from Wandera on which information is made available through the password-protected portal that allows Customer to view data related to the service.</li>
                                                <li><b>1.4 “Secure Mobile Gateway” </b>means the cloud based service delivered by Wandera where management of data traffic is performed between the End User device and the Internet.</li>
                                            </ol>
                                        </li>
                                    </ol>
                                    <ol>
                                        <li><b>2. </b><b>A</b><b>PPENDICES</b></li>
                                        <li><b>2.1 </b>This Agreement has the following Appendices which form an integral part thereof;</li>
                                    </ol>
                                    <p>Appendix A: <b>Pricing</b></p>
                                    <p>Appendix B: <b>Service Description</b>, <b>Support and SLA</b></p>
                                    <ol>
                                        <li><b>2.2 </b>The Appendices shall be kept up-to-date and any modifications thereof shall be executed in writing.</li>
                                    </ol>
                                    <ol>
                                        <li><b>3. </b><b>S</b><b>ERVICES</b></li>
                                        <li><b>3.1 General</b>. During the Term, FLEXINETS will make the Service available to Customer for the fees and on the terms set forth in this Agreement. FLEXINETS will designate an account manager to respond to inquiries of Customer regarding the Services.</li>
                                        <li><b>3.2 Account and Password Information. </b>Customer is solely responsible for assigning administrators name and passwords (“Credentials”) to administrators for accessing the Service and for imposing any limitations on the disclosure of such Credentials as Customer may deem appropriate. Customer is responsible for all use of Credentials to use the Service. Customer may not transfer or share&nbsp; any account&nbsp; with&nbsp; anyone. FLEXINETS&nbsp; will&nbsp; assign&nbsp; to Customer a unique password and identification code used to access the Customer portals. Only administrators of Customer will have access to the Portal Service.</li>
                                    </ol>
                                    <ol>
                                        <li><b>3.3 Secure Mobile Gateway Service.&nbsp; </b>Customer activate users for the Secure Mobile Gateway Service by providing Flexinets with appropriate information of the End User such as email, phone number and device type. This information can be provided via the Flexinets portal or email to Flexinets support. The customer is solely responsible for providing correct end user information.</li>
                                    </ol>
                                    <ol>
                                        <li><b>3.4 End User Support</b>. Flexinets will provide technical and customer support to End Users.</li>
                                    </ol>
                                    <ol>
                                        <li><b>3.5 Customer information</b>. Where, as part of the Services, Flexinets is holding information about Customers, Flexinets undertakes to use all reasonable endeavors to ensure that its systems are reasonably secure from unauthorized access. However, Flexinets cannot give any warranty or guarantee that its systems will be secure at any stage, and does not accept responsibility for unauthorized access to its systems. Flexinets will inform Customer of any detected unauthorized access without delay, at latest 24 hours after detection.</li>
                                        <li><b>3.6 Flexinets access to customer information. </b>Whereas Flexinets has access to customer data for service implementation and support purposes, this access will be terminated at any time at customer written request. Flexinets will comply to the request without unnecessary delay.</li>
                                        <li><b>3.7 Service upgrades.</b> Flexinets may at any time amend the Services and any related documentation for any reason, including legal, safety, business or technical considerations. Flexinets shall notify the Customer of any material modification or update in advance and in writing, and shall seek to ensure that any modifications or updates do not materially degrade the performance of the Services or Customers’ use of the Services. Flexinets shall use reasonable efforts to implement all such modifications or updates in a manner that minimizes the impact on Customers’ use of the Services. However, in case of material modifications, Customer is entitled to terminate the Agreement with a 30 days’ notice period.</li>
                                        <li><b>4. </b><b>S</b><b>ERVICE </b><b>R</b><b>ATE </b><b>P</b><b>LAN AND</b><b> </b><b>F</b><b>EES</b></li>
                                        <li><b>4.1 Service Rate Plan. </b>Customer agrees to pay for usage of the Service in accordance with Service Rate Plan, Appendix A. FLEXINETS may change the Service Rate Plan upon notice to Customer, such change to be effective within thirty (30) days after the date of such notice. If Customer cannot agree to such a change, Customer has the right to cancel the contract to expire at date of change.</li>
                                    </ol>
                                    <ol>
                                        <li><b>4.2 License billing</b>. Billing will be based on the number of Device Licenses ordered by the Customer. Any incremental Device Licenses ordered subsequent to the initial order will be coterminous with the contract term for the original order. Activating users on the portal in excess of the number of licenses previously ordered will be deemed as additional license orders. Flexinets reserves the right to reject any License orders within the final three months of a Customer’s contract term without a minimum twelve&nbsp; month renewal for all existing Licenses ordered by Customer</li>
                                        <li><b>4.3 Payment. </b>Within fourteen (14) days after the end of each calendar month, FLEXINETS will invoice Customer for use of the Service and any licensed ordered during the month, and any other fees due for Services provided for such month. All pricing hereunder will be in € and are due and payable within thirty ( 30 days ) days after the date of invoice. Overdue payments will accrue simple interest, at the lesser of one and zero point half percent (0.5%) per month, from due date until paid, and Customer will pay FLEXINETS cost of collection. . FLEXINETS may include on an invoice, and Customer agrees to pay for, (i) any Service ordered by Customer or End Users within one-hundred and eighty (180) days before the date of the invoice and (ii) any corrections to amounts invoiced, within one-hundred and eighty (180) days after the date of the corrected invoice.</li>
                                        <li><b>4.4 Taxes. </b>The fees stated herein are exclusive of VAT but inclusive of all other taxes. VAT is added to the sales price and charged to the Purchaser, where so required by the applicable mandatory laws.</li>
                                    </ol>
                                    <ol>
                                        <li><b>5. </b><b>D</b><b>ISCLAIMER OF</b><b> </b><b>W</b><b>ARRANTY</b><b>.</b></li>
                                        <li><b>5.1 Disclaimer of Warranty. </b>The software, the service, and all associated documentation and materials are provided to customer and all end users “as is,” without any warranty of any kind. without limiting the foregoing and excluding express and warranties given in this agreement and statutory warranties, Flexinets and all Flexinets suppliers expressly disclaim any and all implied warranties, conditions, and representations including any warranties, merchantability, fitness for a particular purpose, and non-infringement. Neither Flexinets nor any Flexinets supplier will be liable for any third-party network failure. Flexinets and its suppliers specifically do not warrant that the software or services will meet customer’s requirements, will be uninterrupted, timely, secure, error free, available on a specified date or time or will have the capacity to meet customer’s demand during specific hours. Access to the network cannot be guaranteed, and disconnection may occur from time to time.</li>
                                    </ol>
                                    <ol>
                                        <li><b>6. </b><b>G</b><b>ENERAL</b><b> </b><b>P</b><b>ROVISIONS</b><b>.</b></li>
                                        <li><b>6.1 Governing</b><b> </b><b>Law.</b><b> </b>This Agreement will be governed in all respects by the laws of Sweden.</li>
                                    </ol>
                                    <ol>
                                        <li><b>6.2 Language.</b><b> </b>The official text of the Agreement (and any Attachments hereto or notice submitted hereunder) will be in English.</li>
                                        <li><b>6.3 Compliance with Laws. </b>At its sole expense, each party will comply with all applicable laws and regulations, including exportation, regarding its activities related to this Agreement. Both parties agree to fulfill user- and usage tracking requirements enforced by local or international officials.</li>
                                    </ol>
                                    <p><b>APPENDIX B – SERVICE DESCRIPTION, SLA AND SUPPORT</b></p>
                                    <p><b>The following document defines the scope and Service Level Agreements (SLAs) for the Managed Services on Wandera Secure Mobile Gateway (SMG) solution and how to contact Flexinets Service and Support function.</b></p>
                                    <p><b>Service Description – Secure Mobile Gateway&nbsp;</b></p>
                                    <p>Wandera SMG provides real-time security and management of mobile data. Securing your devices with Wandera will remove the risk associated with handling your sensitive corporate, client or employee data on mobile devices by proactively detecting and addressing security threats, while allowing your workforce the freedom to safely access relevant content whenever necessary, keep in touch with clients and colleagues, and remain productive. Wandera takes care of content monitoring and filtering, reducing the requirement for internal IT staff to access confidential information. In addition, data compression, content and roaming controls vastly reduce the direct and indirect costs of Internet and app usage at home or abroad.</p>
                                    <p>Wandera utilizes a multi-level approach by combining cloud and on device security. The Wandera service acts as an in-line cloud proxy, scanning data in real-time to analyse usage and detect and block security threats. The Wandera mobile app complements this by actively monitoring the device and flagging unusual behaviour, without impacting the user experience. Wandera’s SmartWire security engine correlates the information and powers a unique set of advanced detection techniques to identify known and zero-day mobile threats, while the RADAR portal provides real-time intelligence and reporting on security and data usage.</p>
                                    <p>Wandera has proven to generate positive ROI and provide best-of-breed security for hundreds of customers ranging from SMB’s to large global enterprises, including NATO, Bloomberg Fidelity, EY, MasterCard and more. It has been widely recognized by analysts, including Gartner which chose Wandera as the Cool Vendor in Enterprise Mobility.<b>&nbsp;</b></p>
                                    <p><b>Scope of Managed Services</b></p>
                                    <p>Flexinets Managed Services provides management and support for the Wandera SMG solution, helping to reduce the level of support required from the customer’s own IT department/administrator. Flexinets will perform the activities outlined in the Managed Services description for Wandera SMG solution, with a simple charging structure and enterprise grade SLAs.</p>
                                    <p>Flexinets Service Operations Centre (SOC) function will act as the level 2 helpdesk and will provide a single point of contact for the Customer’s Level 1 helpdesk. Flexinets SOC will process Wandera SMG related incidents and managed service requests according to the scope defined in this document.</p>
                                    <p><b>Incident Requests</b></p>
                                    <p>All incidents related to Wandera SMG service</p>
                                    <table cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            <tr>
                                                <td valign="top"><b>Incident Resolution – Application, Platform or Infrastructure related incidents</b></td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>SLA</b></td>
                                                <td valign="top"><b>Measure</b></td>
                                                <td valign="top"><b>Target</b></td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Contact centre call handling</b></td>
                                                <td valign="top">Time for Flexinets SOC to answer a call (following any customer specific messages or menus)</td>
                                                <td valign="top">90% within 20 seconds</td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Logging of incidents/response time</b></td>
                                                <td valign="top">
                                                    Time taken from receipt of email to respond and raise a ticket, assuming accurate data set received<p></p>
                                                    <p>Or</p>
                                                    <p>Time taken to respond to ticket raised by the customer, assuming accurate data set received.</p>
                                                    <p>P1 and P2 must be reported initially by phone.</p>
                                                </td>
                                                <td valign="top">90% within 1 hour</td>
                                            </tr>
                                            <tr>
                                                <td valign="top">
                                                    <b>Incident Resolution – P1</b><p></p>
                                                    <p>An issue that prevents operation of critical documented functions with high frequency or duration.</p>
                                                </td>
                                                <td valign="top">Maximum time to restore or agree path to resolution</td>
                                                <td valign="top">90% within 7 hours</td>
                                            </tr>
                                            <tr>
                                                <td valign="top">
                                                    <b>Incident Resolution – P2</b><p></p>
                                                    <p>An issue that consistently prevents operation of non-critical documented functions or occasionally impacts critical documented functions or a critical issue for which a temporary work around has been provided.</p>
                                                </td>
                                                <td valign="top">Maximum time to restore or agree path to resolution</td>
                                                <td valign="top">90% within 14 hours</td>
                                            </tr>
                                            <tr>
                                                <td valign="top">
                                                    <b>Incident Resolution – P3</b><p></p>
                                                    <p>An issue that has some impact on administration, non-critical operation or other secondary functions or a Major issue for which a temporary work around has been provided; or a request for an enhancement or additional functionality that is not due to a defect in the Services.</p>
                                                </td>
                                                <td valign="top">Maximum time to restore or agree path to resolution</td>
                                                <td valign="top">90% within 9 business days</td>
                                            </tr>
                                            <tr>
                                                <td valign="top">
                                                    <b>Incident Resolution – P4</b><p></p>
                                                    <p>The service is unaffected. Customer request for product related technical advise.</p>
                                                </td>
                                                <td valign="top">Maximum time to restore or agree path to resolution</td>
                                                <td valign="top">90% within 18 business days</td>
                                            </tr>
                                            <tr>
                                                <td valign="top">
                                                    <b>Incident Resolution – P5</b><p></p>
                                                    <p>The service is unaffected. General information and feature questions related to the services.</p>
                                                </td>
                                                <td valign="top">Maximum time to restore or agree path to resolution</td>
                                                <td valign="top">90% within 18 business days</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p>&nbsp;</p>
                                    <p>Managed Service Requests</p>
                                    <p>For the managed service, Flexinets will additionally perform the following activities on the Wandera SMG service with enterprise grade SLAs.</p>
                                    <table cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            <tr>
                                                <td valign="top"><b>User Account Management</b></td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>SLA</b></td>
                                                <td valign="top"><b>Measure</b></td>
                                                <td valign="top"><b>Target</b></td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Add/delete new user device</b></td>
                                                <td valign="top">Maximum time to add or delete device, measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 1 business days</td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Add/delete new user devices (bulk import)</b></td>
                                                <td valign="top">Maximum time to add or delete devices, measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">
                                                    Up to 500 users – 90% within 1 business days<p></p>
                                                    <p>Over 500 users – on request</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Change device assignment to data policy group</b></td>
                                                <td valign="top">Maximum time to change device assignment to data policy group, measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 1 business days</td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Change device assignment to data plan</b></td>
                                                <td valign="top">Maximum time to change device assignment to data plan, measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 1 business days</td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Change device data policy enforcement option(s)</b></td>
                                                <td valign="top">Maximum time to change data policy enforcement options, measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 3 business hours</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            <tr>
                                                <td valign="top"><b>Policy and Configuration Management</b></td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>SLA</b></td>
                                                <td valign="top"><b>Measure</b></td>
                                                <td valign="top"><b>Target</b></td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Add/delete/modify data policy group(s)</b></td>
                                                <td valign="top">Maximum time to add/delete/modify data policy group(s), measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 3 business days</td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Add/delete whitelist category or custom whitelist domain</b></td>
                                                <td valign="top">Maximum time to add/delete whitelist category or custom whitelist domain, measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 3 business hours</td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Add/delete blacklist category or custom blacklist domain</b></td>
                                                <td valign="top">Maximum time to add/delete blacklist category or custom blacklist domain, measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 3 business hours</td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Modify master settings for tethering and compression controls</b></td>
                                                <td valign="top">Maximum time to modify master settings, measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 1 business days</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            <tr>
                                                <td valign="top"><b>Service Controls Management</b></td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>SLA</b></td>
                                                <td valign="top"><b>Measure</b></td>
                                                <td valign="top"><b>Target</b></td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Enable/disable PIN locked profiles</b></td>
                                                <td valign="top">Maximum time to enable/disable PIN locked profiles, measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 5 business days</td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Enable/disable anonymization of user identity</b></td>
                                                <td valign="top">Maximum time to enable/disable anonymization of user identity, measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 5 business days</td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Configure Mobile Data Routing options</b></td>
                                                <td valign="top">Maximum time to configure Mobile Data Routing options, measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 5 business days</td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Configure App Ping options</b></td>
                                                <td valign="top">Maximum time to configure App Ping options, measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 5 business days</td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Configure Advanced APN Settings</b></td>
                                                <td valign="top">Maximum time to configure advanced APN settings, measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 5 business days</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            <tr>
                                                <td valign="top"><b>Data Plan Management</b></td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>SLA</b></td>
                                                <td valign="top"><b>Measure</b></td>
                                                <td valign="top"><b>Target</b></td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Add/delete data plan(s)</b></td>
                                                <td valign="top">Maximum time to add/delete data plan(s), measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 5 business days</td>
                                            </tr>
                                            <tr>
                                                <td valign="top"><b>Modify data plan(s)&nbsp;</b></td>
                                                <td valign="top">Maximum time to modify data plan(s), measured from receipt of request by Level 2 helpdesk</td>
                                                <td valign="top">90% within 1 business days</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p>Other Managed Service Components</p>
                                    <p><b>Service Review</b></p>
                                    <p>The service review is a scheduled monthly email that reviews the performance of the service and any key performance indicators.</p>
                                    <p><b>Knowledge Management</b></p>
                                    <p>The purpose of knowledge management is to ensure that customer helpdesks and users are able to utilize the service to maximum business benefit. Specifically, this includes;</p>
                                    <ul>
                                        <li style="list-style-type: none;">
                                            <ul>
                                                <li>• Recommendations on Knowledgebase and FAQ materials using incident and problem management as inputs</li>
                                                <li>• Comprehensive update pack aligned to each release ensuring customer helpdesk is ready to support new features and changes.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <p><b>Support</b></p>
                                    <p>Support ticket</p>
                                    <p>In order to ensure that all support issues are handled in order of receipt, by priority and calls of nature, all cases will be ticketed in the Flexinets Customer Care System and placed in queue to be handled in order of receipt, by severity.</p>
                                    <p>To report a problem please contact us:</p>
                                    <ul>
                                        <li style="list-style-type: none;">
                                            <ul>
                                                <li>• EMAIL: Send an email to <a href="mailto:support@flexinets.se">support@flexinets.se</a></li>
                                                <li>• ONLINE SUPPORT: Use the Online Support Tool at <a href="http://www.flexinets.eu/">www.flexinets.eu </a>or the Management Portal <a href="https://secure.flexinets.se/">https://secure.flexinets.se/</a></li>
                                                <li>• PHONE: Flexinets Support +46 8 546 584 30 (workdays 08-17 Stockholm UTC+1hour)</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <p>Your ticket will be handled in order of receipt and by severity. All tickets are prioritized immediately and handled according to agreed SLA.</p>
                                    <p>Service Status</p>
                                    <p>Information about current system status and scheduled maintenance are available in the news feed of the Flexinets Portals and at <a href="https://www.flexinets.se/index.php/news/">https://www.flexinets.se/index.php/news/</a></p>
                                    <p>Online Support Tool</p>
                                    <p>The online support tool is always available when visiting <a href="http://www.flexinets.eu/">http://www.flexinets.eu </a>or the Management Portal&nbsp;<a href="https://secure.flexinets.se/">https://secure.flexinets.se/</a></p>
                                    <p>You will find it in the lower left corner of your browser.</p>
                                    <p>When the online chat service is available you may reach out directly to the customer service or simply create a support ticket by opening orange window/box and clicking on the envelope. By entering your contact information and specifying your technical issue a support ticket will be created.</p>
                                    <p>Your ticket will be handled in order of receipt and by severity. All tickets are prioritized immediately and handled according to agreed SLA.</p>
                                </div>
                                <h2><strong>General Terms and Conditions Ecommerce Business</strong></h2>
                                <p>General Terms and Conditions of Flexible Networks Nordic AB<strong>,</strong> a company incorporated under the laws of Sweden, having its registered office at Mäster Samuelsgatan 60, SE-111 21 Stockholm, Sweden (<strong>“Flexinets”)</strong>.</p>
                                <p>&nbsp;</p>
                                <h2>1.&nbsp;&nbsp;&nbsp;&nbsp; Definitions</h2>
                                <p>The following terms shall have the following meanings in the context of these General Terms and Conditions of Business (“<strong>Ts&amp;Cs</strong>“):</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>1.1</td>
                                            <td></td>
                                            <td>“<strong>Business</strong>” means any Customer who enters into a legal transaction in the course of its trade, business or profession.</td>
                                        </tr>
                                        <tr>
                                            <td>1.2</td>
                                            <td></td>
                                            <td>“<strong>Flexinets Website</strong>” means any web page operated by Flexinets for the sale of the Products and Services that is identifiable from the Ts&amp;Cs as well as Flexinets’s legal information posted on it. Web pages operated by Suppliers are expressly not covered by this definition.</td>
                                        </tr>
                                        <tr>
                                            <td>1.3</td>
                                            <td></td>
                                            <td>“<strong>Consumer</strong>” means any Customer who is a natural person and who enters into a legal transaction for a purpose that cannot be attributed to that person’s trade, business or profession (Section 13 BGB).</td>
                                        </tr>
                                        <tr>
                                            <td>1.4</td>
                                            <td></td>
                                            <td>“<strong>Customer</strong>” means any natural or legal entity or partnership with legal capacity that places an order for Products and Services on a Flexinets Website. The term Customer shall, unless otherwise specified, mean both, Consumers and Businesses.</td>
                                        </tr>
                                        <tr>
                                            <td>1.5</td>
                                            <td></td>
                                            <td>“<strong>Products</strong>” means (a) a decryption or authorization code, a series or authorization number, a download link or similar code or mechanism, that gives the Customer access, first-time use or continued use of a Software or a Service, or (b) other products (including physical products).</td>
                                        </tr>
                                        <tr>
                                            <td>1.6</td>
                                            <td></td>
                                            <td>“<strong>Service</strong>” means all the Supplier’s services sold by Flexinets to the Customer via Flexinets Website.</td>
                                        </tr>
                                        <tr>
                                            <td>1.7</td>
                                            <td></td>
                                            <td>“<strong>Software</strong>” means all the Supplier’s computer programs marketed in any form and through any medium via Flexinets Website.</td>
                                        </tr>
                                        <tr>
                                            <td>1.8</td>
                                            <td></td>
                                            <td>“<strong>Subscription</strong>” means Products or Services with recurring payment obligations (“<strong>Subscriptions</strong>“). The payments are due at the agreed interval(s).</td>
                                        </tr>
                                        <tr>
                                            <td>1.9</td>
                                            <td></td>
                                            <td>“<strong>Subscription Payment Interval</strong>” means the agreed intervals at which the payments of Subscriptions are due.</td>
                                        </tr>
                                        <tr>
                                            <td>1.10</td>
                                            <td></td>
                                            <td>“<strong>Supplier</strong>” means any natural person or legal entity that provides, generates, manufactures, or delivers Products and Services to Flexinets for the purpose of resale to a Customer.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h2>2.&nbsp;&nbsp;&nbsp;&nbsp; Subject Matter and Scope</h2>
                                <p>These Ts&amp;Cs apply to all offers, acceptances, deployments, deliveries of services and supplies by Flexinets or to the Customer in connection with the sale of Products and Services as defined in Clauses 1.5 and 1.6 via a Flexinets Website. Deviating terms of the Customer or third parties shall only become part of this contract upon written acceptance by Flexinets. These Ts&amp;Cs shall apply even where Flexinets performs its contractual obligations without reservation despite being aware that the Customer’s conditions are inconsistent with the Ts&amp;Cs. Where the sale of Products and Services includes the provision of Services or other performance by third parties, the particular license and other conditions of the third party shall apply above and beyond these Ts&amp;Cs.</p>
                                <h2>3.&nbsp;&nbsp;&nbsp;&nbsp; Entry into a Contract (Offer, Confirmation and Acceptance)</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>3.1</td>
                                            <td></td>
                                            <td>An order placed by the Customer represents an offer to Flexinets for the purchase of Products and Services under these Ts&amp;Cs. Such orders are subject to subsequent acceptance by Flexinets. The Customer order is accepted through express confirmation or at the latest by the provision of the ordered Products and Services.</td>
                                        </tr>
                                        <tr>
                                            <td>3.2</td>
                                            <td></td>
                                            <td>Flexinets may, at its own discretion, use third parties to carry out its services.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h2>4.&nbsp;&nbsp;&nbsp;&nbsp; Customer Warranties</h2>
                                <p>The Customer warrants that all the information the Customer provided when placing the order (including, but not limited to, personal data and payment data) was up-to-date and accurate in all material respects. The costs arising in relation to any incorrect data submitted by Customer or data amended by Customer after the submission of Customer’s order shall be borne by the Customer. To the extent that the Customer has access to a customer account with Flexinets, the Customer is responsible for maintaining and immediately updating the Customer account details to ensure constant and continuous accuracy and completeness; the Customer shall not disclose the password used to access the customer account to third parties for any reason.</p>
                                <h2>5.&nbsp;&nbsp;&nbsp;&nbsp; Approvals, Exports, Customs Duties</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>5.1</td>
                                            <td></td>
                                            <td>To the extent that an approval or license from the government or other authority is required for the acquisition, transportation, or use of Products and Services, the Customer shall be obliged to obtain such approval or license at Customer’s own cost and provide Flexinets with evidence of the same upon request. The fact that the Customer has yet to obtain an approval or license shall not entitle the Customer to withhold or delay payment. All costs and expenses incurred to Flexinets on the basis of such a failure to obtain an approval or license or its being obtained erroneously shall be for the account of the Customer. For Consumers, this shall not apply in relation to an approval or other permit for transportation.</td>
                                        </tr>
                                        <tr>
                                            <td>5.2</td>
                                            <td></td>
                                            <td>The Products and Services sold by Flexinets and made available to the Customer electronically or physically may give the Customer access to technologies and Software which are subject to the export controls of the Federal Republic of Sweden, the export controls of the United States of America or those of the countries in which the Products and Services are being marketed or in which they are being used. The Customer undertakes to observe these export controls. Flexinets shall be entitled to withdraw from the Contract where the Customer breaches export controls.</td>
                                        </tr>
                                        <tr>
                                            <td>5.3</td>
                                            <td></td>
                                            <td>Importing goods into the European Economic Area may, where specific goods values are exceeded, lead to customs duties (e.g. where the value of the goods exceeds the Customer’s personal allowance). Upon the arrival of the goods at the place designated by the Customer the latter may incur customs duties, import duties, or taxes imposed by the relevant authorities. All such additional costs shall be borne by the Customer as they are beyond Flexinets’s control and the latter has no knowledge of them. More detailed information on customs regulations or duties can be obtained by the Customer from the customs office responsible for Customer’s jurisdiction.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h2>6.&nbsp;&nbsp;&nbsp;&nbsp; Prices, Payment Conditions, and Default</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>6.1</td>
                                            <td></td>
                                            <td>The payment of the purchase price is due immediately upon entry into the contract and shall take place in the manner specified on the Flexinets Website. With the exception of purchases on account payments shall take place prior to delivery. Where the Customer has purchased a Subscription, the Customer shall at each Subscription Payment Interval pay the price of the Subscription or make the corresponding purchase price available using the payment option agreed upon between the Customer and Flexinets.</td>
                                        </tr>
                                        <tr>
                                            <td>6.2</td>
                                            <td></td>
                                            <td>
                                                Payments by Businesses<p></p>
                                                <p>To Business, the following provisions shall apply:</p>
                                                <p>In the event that the Customer is a Business, it shall identify itself as a such when the order is placed. Flexinets may consider the address provided as Business’s place of business, unless indicated otherwise. If Business’s VAT ID is registered to another country, Flexinets may also employ that information for tax purposes. Flexinets will apply taxes to the extent required by law. Flexinets may apply and charge taxes after the Business has made the payment for the Products and Services according to Clause 6.1. The Business is then obliged to subsequently pay the remaining amount of taxes to Flexinets. Additionally, as a recipient of the Products and Services, the Business may have the obligation to remit VAT, sales taxes, or similar consumption taxes (“Reverse Charge Mechanism”). If the Business is required to pay or withhold any tax for payments made to Flexinets, Flexinets remains entitled to the amount due under Clause 6.1 in full and free of any deductions. The purchase price shall be increased by the amount of taxes paid or withheld by the Business (gross-up). The Business will provide documentation to Flexinets, which certifies that all applicable taxes have been paid to the relevant tax authority within 30 days after the date of payment of the purchase price. For purposes of this Clause, taxes means any sales, use, gross receipts, business, occupation, and other taxes (other than taxes on the income of Flexinets) and similar charges imposed by any government or other authority, with the exception of VAT levied by a member of the European Union.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6.3</td>
                                            <td></td>
                                            <td>
                                                Individual Payment Methods<p></p>
                                                <p>Customer’s bank or credit card issuer may charge additional service fees for international credit card payments (“Foreign Transaction Fee”), depending on whether the Customer provides the payment in a foreign currency or to a merchant established in another country (e.g. Flexinets as merchant established in Sweden).</p>
                                                <p>Foreign Transaction Fees charges and amounts are individually agreed upon between banks / credit card issuers and Customers. Flexinets has no insight into such agreements and can therefore provide no information on Foreign Transaction Fees and similar fees or charges. THE PARTIES AGREE THAT, THEREFORE, ANY LIABILITY ON THE PART OF FLEXINETS FOR CHARGED FOREIGN TRANSACTION FEES IS EXCLUDED AND THAT THE CUSTOMER IS SOLELY AND EXCLUSIVELY LIABLE FOR PAYING SUCH FOREIGN TRANSACTION FEES.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6.4</td>
                                            <td></td>
                                            <td>
                                                If the Customer choses SEPA direct debit as applicable payment method, the Customer will be notified by means of a pre-notification (“Pre-Notification”) directly after submitting the order. The Customer’s account will be charged the day after Pre-Notification.<p></p>
                                                <p>Should the payment be declined or reversed, for example, due to erroneous account data or insufficient funds in the Customer’s account, Flexinets is entitled to invoice an additional EUR 10.00 to compensate Flexinets for the related additional work and transaction costs. This fee shall not be levied if the Customer provides evidence that no loss at all has been suffered, or one that is significantly less than the fee of EUR 10.00. Flexinets shall be entitled to claim for compensation of higher actual costs upon providing evidence of the same.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6.5</td>
                                            <td></td>
                                            <td>In case of any advance deliveries (purchase order or purchase with grant of a direct debit authorization) payments shall be made in full irrespective of any claims for short deliveries or Product defects. Flexinets reserves the right to cancel any order if payment has not been completed within 14 days.</td>
                                        </tr>
                                        <tr>
                                            <td>6.6</td>
                                            <td></td>
                                            <td>If payment is made with any one of the following payment methods, Customer will have 14 days to complete the order by providing funds for the order. Flexinets reserves the right to cancel any order if payment has not been completed within 14 days.</td>
                                        </tr>
                                        <tr>
                                            <td>6.7</td>
                                            <td></td>
                                            <td>If Flexinets and Customer agree on using bills of exchange or checks as payment method, payment shall only be considered made once they have been redeemed. Discount and collection charges shall be for the Customer’s account. Flexinets shall not be liable for their prompt submission.</td>
                                        </tr>
                                        <tr>
                                            <td>6.8</td>
                                            <td></td>
                                            <td>
                                                Default of Payment<p></p>
                                                <p>To the extent that, in case of purchase on account, the invoice includes a payment deadline the Customer shall be in default of payment if the full purchase price payment is not credited to a Flexinets account or received by Flexinets by such deadline. This also applies if selected payment method is insufficient to cover full amount within such deadline. In case Flexinets and Customer have agreed on direct debit as payment method, this shall only apply if Flexinets has reasonably tried to debit the amount from the bank account.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6.9</td>
                                            <td></td>
                                            <td>
                                                Default interest for Customers placing their order from outside the USA<p></p>
                                                <p>Where a Consumer defaults, the Consumer shall pay Flexinets late payment interest of five percentage points (5%) over the base rate applicable at the time of the default. Where a Business defaults, the interest rate shall be nine percentage points (9%) over the base rate. “Base rate” means a variable interest rate set at half-yearly intervals by the Swedish Central Bank (“Bundesbank”) which, increased by a fixed margin, gives the late-payment interest rate (<a href="http://www.bundesbank.de/Redaktion/DE/Standardartikel/Bundesbank/Zinssaetze/basiszinssatz.html?nsc=true">http://www.bundesbank.de/Redaktion/DE/Standardartikel/Bundesbank/Zinssaetze/basiszinssatz.html?nsc=true</a>).</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6.10</td>
                                            <td></td>
                                            <td>
                                                Default interest for Customers placing their order from within the USA<p></p>
                                                <p>Without limiting other remedies, Flexinets reserves the right to charge a late fee on all past due payments equivalent to the lesser of one and a half percent (1.5%) per month on the unpaid balance or the highest rate allowed by applicable law.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6.11</td>
                                            <td></td>
                                            <td>In case of default Flexinets reserves the right to cancel the order and/or claim damages.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h2>7.&nbsp;&nbsp;&nbsp;&nbsp; Price Adjustment for Subscription Products and Subscription Services</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>7.1</td>
                                            <td></td>
                                            <td>The price for the Products and Services consists of the sales margin of Flexinets, the procurement costs of Flexinets for the Products and Services and the applicable taxes. The sales margin covers the costs of Flexinets for the IT infrastructure, personnel and transaction processing. During the lifetime of a Subscription, the framework for the price calculation may change from one Subscription Payment Interval to the next. Therefore, in this Clause 7 the Parties agree upon the requirement and procedures for adapting the Subscription price.</td>
                                        </tr>
                                        <tr>
                                            <td>7.2</td>
                                            <td></td>
                                            <td>Any additional taxes and duties imposed on the sales of Product and Service shall be borne by the Customer. This applies correspondingly to changes of the taxes and duties already billed to Customer; Flexinets is also obliged to pass on abolitions and reductions of taxes and duties.</td>
                                        </tr>
                                        <tr>
                                            <td>7.3</td>
                                            <td></td>
                                            <td>On the basis of this contract, Flexinets will adapt the prices for the Products and Services to the change in costs Flexinets incurs or in prices Flexinets has to pay for Products and Services at its reasonable discretion. The price may be increased and will be decreased if e.g. the procurement costs for Products and Services rise or fall, or other changes in the economic and legal framework result in changed costs (e.g. through increased costs for the IT infrastructure or transaction processing). If costs of one type rise, e.g. procurement costs, Flexinets may increase the price only to the extent there are no falling costs of another type. If costs of one type fall, e.g. procurement costs, Flexinets will reduce the price to the extent this is not balanced out by rising prices of another type. Exercising reasonable discretion, Flexinets will define the time of price change in a way that cost reductions have at least the same effect on the price change as cost increases.</td>
                                        </tr>
                                        <tr>
                                            <td>7.4</td>
                                            <td></td>
                                            <td>Flexinets will inform Customer in a timely manner about any price changes so that the Customer is able to cancel the Subscription before the first billing of the changed price.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h2>8.&nbsp;&nbsp;&nbsp;&nbsp; Delivery, Delivery Period</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>8.1</td>
                                            <td></td>
                                            <td>The delivery of the ordered goods shall be carried out according to the delivery information on the relevant Flexinets Website, as amended from time to time.</td>
                                        </tr>
                                        <tr>
                                            <td>8.2</td>
                                            <td></td>
                                            <td>For Customers placing their order from within the USA, the delivery dates are estimates only.</td>
                                        </tr>
                                        <tr>
                                            <td>8.3</td>
                                            <td></td>
                                            <td>The agreed delivery period shall begin upon receipt of payment in full by Flexinets and Customer’s accurate supply of all data necessary for the processing of the order to Flexinets or the payment services provider selected by the Customer.</td>
                                        </tr>
                                        <tr>
                                            <td>8.4</td>
                                            <td></td>
                                            <td>Delivery delays caused by statutory or official arrangements (e.g. import and export restrictions) and that are not the fault of Flexinets shall extend the delivery period for a time equivalent to the duration of such obstacles. In important cases Flexinets shall immediately notify the Customer of their commencement and termination, to the extent Flexinets is aware of the same.</td>
                                        </tr>
                                        <tr>
                                            <td>8.5</td>
                                            <td></td>
                                            <td>
                                                Physical Products and Services<p></p>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>8.5.1</td>
                                                            <td></td>
                                                            <td>
                                                                To the extent the Customer fails to accept the delivered Products, or to the extent the Customer rejects them, risk of damage or loss of the Product shall pass to the Customer without prejudice to all other rights to which Flexinets is entitled:<p></p>
                                                                <p>Flexinets shall be entitled, at the Customer’s risk and cost, to endeavor to have the Product delivered by such means it deems suitable and reasonable and to put the Product into storage at the Customer’s risk and cost.</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>8.5.2</td>
                                                            <td></td>
                                                            <td>Flexinets shall be entitled to make partial deliveries to the extent this is reasonable. To the extent Flexinets makes partial deliveries to Businesses each partial delivery shall represent a separate contract and Businesses shall, in case of defects in one or more partial deliveries, not be entitled to cancel subsequent partial deliveries.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>8.5.3</td>
                                                            <td></td>
                                                            <td>The risk of accidental destruction and accidental deterioration is assumed by Businesses as soon as the Product is received by the person carrying out transportation but no later than upon entering the Customer’s possession.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h2>9.&nbsp;&nbsp;&nbsp;&nbsp; Retention of Title</h2>
                                <p>Flexinets retains title to the Product until payment in full of all claims under the contract including secondary claims (e.g. costs of exchange, financing costs, interest etc.) is received.</p>
                                <h2>10.&nbsp; Usage Rights, License</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>10.1</td>
                                            <td></td>
                                            <td>To the extent that the Products and Services delivered by Flexinets consist of or include an activation code as described in Clause 1.5 (a) or a Service, the Customer accepts that the use of the corresponding Software or respectively the provision of the corresponding Service is subject to acceptance of Supplier’s licensing conditions and terms of use (“EULA”). The Customer receives the EULA upon purchasing the Software or the Service. The EULA can also be enclosed with the software or communicated to the Customer before or during use of a Service. The Customer acknowledges that the Software or Service may only be reproduced, adapted, transmitted, made available, marketed, altered, disassembled, decompiled, re-transmitted or combined with other software or another Service as expressly permitted under the EULA or the applicable law.</td>
                                        </tr>
                                        <tr>
                                            <td>10.2</td>
                                            <td></td>
                                            <td>
                                                Where the Customer<p></p>
                                                <p>a) does not receive the EULA prior to purchase of the relevant Product or the relevant Service or the EULA are not enclosed with the Software and</p>
                                                <p>b) the Customer does not use or has not used the Software or the Service, or</p>
                                                <p>c) does not agree to the licensing conditions and terms of use and does not wish to use the Software or the Service on the basis of these licensing conditions and terms of use, the Customer may contact Flexinets and request the repayment of the amounts paid for the Software or the Service. Flexinets may, in return, request the return of the Software or Service to Flexinets (where possible). In this case, however, the Customer shall have no rights whatsoever to use such Software or such Service.</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h2>11.&nbsp; Privacy</h2>
                                <p>Customer data is subject to electronic data processing. Where necessary, Flexinets forwards personal data to the Supplier of the Products and Services purchased by the Customer, service partners or affiliated companies, some of which may be located outside the European Economic Area, including the USA, subject to compliance with the statutory requirements concerning appropriate safeguards.</p>
                                <h2>12.&nbsp; Defects, Claims in respect of Defects and Exclusion of Liability</h2>
                                <p>Flexinets is only legally responsible for the proper condition of Products and Services as defined in Clauses 1.5 and 1.6. Since Flexinets does not sell Software, the corresponding liability is waived in Clauses 12.6.2 and 12.7.1.</p>
                                <p>The provisions of Sections 12.1 – 12.6 shall apply only to Customers who place an order from outside the USA. Section 12.7 shall apply to Customers who place an order from within the USA.</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>12.1</td>
                                            <td></td>
                                            <td>All information on Flexinets’s Products and Services is merely by way of description and does not represent a guarantee.</td>
                                        </tr>
                                        <tr>
                                            <td>12.2</td>
                                            <td></td>
                                            <td>
                                                Defective Products and Services<p></p>
                                                <p>A Product is defective where it lacks the agreed quality, is not suitable for the agreed use or appropriate for the customary use and does not demonstrate the quality usual for Products of the same type and which the purchaser can expect of this type of Product. A Product is also defective where it infringes industrial property rights, copyright or other third-party rights. The technical and legal regulations applicable in Sweden shall apply unless specifically agreed otherwise.</p>
                                                <p>Services or the provision of Services are defective to the extent they do not comply with the contractual agreements.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12.3</td>
                                            <td></td>
                                            <td>
                                                Duty of Inspection and Notification<p></p>
                                                <p>Businesses shall be obliged to test the Products under normal operating conditions immediately after delivery and to make sure that they are in perfect condition, match the Product description and are complete. Claims may only be made with respect to rights based on Product defects or a short delivery if the Customer notifies Flexinets in writing or by email of the Product defects or short delivery immediately and in any case no later than five days after receipt of the Products or in the case of a hidden defect, immediately after becoming aware of the respective hidden defect.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12.4</td>
                                            <td></td>
                                            <td>
                                                Claims for Defects by Customers placing their order from outside the USA<p></p>
                                                <p>According to Swedish law, as applicable pursuant to Clauses 17.1.1 and Customers have the following claims for defects:</p>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>12.4.1</td>
                                                            <td></td>
                                                            <td>
                                                                Claims for Defects by Businesses<p></p>
                                                                <p>Where Flexinets has carried out or delivered defective Products and Services to a Business, Flexinets may choose either</p>
                                                                <p>1.&nbsp;&nbsp;&nbsp;&nbsp; to make good the defects by way of substitute performance or</p>
                                                                <p>2.&nbsp;&nbsp;&nbsp;&nbsp; to replace the defective Products and Services with a new Product or Service free of defects.</p>
                                                                <p>Where the substitute performance fails, the Business shall be able to bring a claim with respect to its statutory warranty rights under the following conditions:</p>
                                                                <p>3.&nbsp;&nbsp;&nbsp;&nbsp; The right to lower the relevant purchase price (price reduction) is excluded.</p>
                                                                <p>4.&nbsp;&nbsp;&nbsp;&nbsp; The right of cancellation shall be limited to the relevant Products and Services.</p>
                                                                <p>5.&nbsp;&nbsp;&nbsp;&nbsp; Where the Business is entitled to claim damages in lieu of performance or to rescind the contract or to claim substitute performance, Flexinets may require the Business to exercise its rights within a reasonable period of time. The Business shall notify Flexinets of its decision in this regard. Where the Business fails to exercise its rights within a reasonable period of time, a claim may only be brought for damages in lieu of performance and a notice of rescission may only be given where an additional deadline of reasonable duration for substitute performance by Flexinets, to be specified by the Business, has expired unsuccessfully.</p>
                                                                <p>6.&nbsp;&nbsp;&nbsp;&nbsp; The limitation period for defects claims by Businesses according to Section 437 No. 1 and No. 2 BGB shall be twelve (12) months from delivery of the Product.</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>12.4.2</td>
                                                            <td></td>
                                                            <td>
                                                                Claims for Defects by Consumers<p></p>
                                                                <p>Where Flexinets has carried out or delivered defective Products and Services to a Consumer, the latter may choose whether Flexinets should make good the defects by way of substitute performance or replace the defective Products and Services with a new Product or Service free of defects. Flexinets is, however, entitled to refuse the selected form of substitute performance where this is possible only at excessive cost and the other form of substitute performance is available without material disadvantage to the Consumer.</p>
                                                                <p>Where the substitute performance fails, it shall generally be at the Consumer’s discretion to opt for a lowering of the purchase price (reduction) or to rescind the contract.</p>
                                                                <p>The limitation period for defects claims by Consumers shall be twenty-four (24) months from delivery of the Product.</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12.5</td>
                                            <td></td>
                                            <td>
                                                Legal Consequences of Rescission<p></p>
                                                <p>Where the Customer exercises an existing right of rescission, the contractual parties shall return the Services received and surrender any use or enjoyment derived. At the same time, the Customer’s right to use the Products or Services shall cease. In the case of Software previously purchased the Customer shall immediately remove this from all installations, storage media and other files and shall destroy the physical components of the Products and Services as well as any copies made of the Software. In addition, the Customer shall make a separate statement in text form (e.g. in writing, by fax or by email) that it will undertake the actions set out above.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12.6</td>
                                            <td></td>
                                            <td>
                                                Disclaimer for Customers placing their order from outside the USA<p></p>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>12.6.1</td>
                                                            <td></td>
                                                            <td>ANY LIABILITY ON THE PART OF FLEXINETS FOR CONSEQUENCES THAT HAVE ARISEN FROM ALTERATIONS MADE TO THE PRODUCTS AND SERVICES BY THE CUSTOMER OR BY A THIRD PARTY OR THAT HAVE ARISEN THROUGH THE MISHANDLING OR INCORRECT OPERATION OF THE PRODUCTS AND SERVICES SHALL BE EXCLUDED.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>12.6.2</td>
                                                            <td></td>
                                                            <td>FLEXINETS ONLY SELLS PRODUCTS AND SERVICES AS DEFINED IN CLAUSES 1.5 and 1.6. THEREFORE ANY LIABILITY ON THE PART OF FLEXINETS FOR THE ADEQUACY OF THE OPERATION OF SOFTWARE AND SERVICES PROVIDED BY SUPPLIERS FOR THE SPECIFIC REQUIREMENTS OF THE CUSTOMER OR FOR THE COMPATIBILITY OF THESE SOFTWARE AND SERVICES WITH COMPONENTS WITHIN THE SPECIFIC HARDWARE CONFIGURATION AT THE CUSTOMER’S PREMISES SHALL BE EXCLUDED.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>12.6.3</td>
                                                            <td></td>
                                                            <td>UNLESS OTHERWISE SPECIFIED IN THIS CLAUSE 12.6, LIABILITY ON THE PART OF FLEXINETS FOR ACTS OR OMISSIONS SHALL BE STRICTLY EXCLUDED.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>12.6.4</td>
                                                            <td></td>
                                                            <td>WHERE FLEXINETS NEGLIGENTLY BREACHES A MATERIAL CONTRACTUAL OBLIGATION, FLEXINETS’S LIABILITY FOR DAMAGES SHALL BE LIMITED TO FORESEEABLE DAMAGE TYPICALLY ARISING IN SUCH CIRCUMSTANCES. MATERIAL CONTRACTUAL OBLIGATIONS ARE THOSE THAT NEED TO BE COMPLIED WITH IF THE PURPOSE OF THE CONTRACT IS TO BE ACHIEVED.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>12.6.5</td>
                                                            <td></td>
                                                            <td>WHERE THE CUSTOMER BRINGS DAMAGES CLAIMS BASED ON FLEXINETS’S DELIBERATE OR RECKLESS BREACH OR ON THE ABSENCE OF A FEATURE GUARANTEED BY FLEXINETS, FLEXINETS SHALL BEAR LIABILITY WITHIN THE STATUTORY LIMITS.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>12.6.6</td>
                                                            <td></td>
                                                            <td>THIS SHALL BE WITHOUT PREJUDICE TO FLEXINETS’S LIABILITY FOR CULPABLE LOSS OF LIFE, PERSONAL INJURY OR DAMAGE TO HEALTH. THE SAME SHALL APPLY TO LIABILITY UNDER THE SWEDISH PRODUCT LIABILITY ACT.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>12.6.7</td>
                                                            <td></td>
                                                            <td>WHERE FLEXINETS’S LIABILITY IS EXCLUDED OR LIMITED, THIS SHALL ALSO APPLY TO THE PERSONAL LIABILITY OF FLEXINETS’S WORKERS, EMPLOYEES, CO-WORKERS, LEGAL REPRESENTATIVES AND VICARIOUS AGENTS.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12.7</td>
                                            <td></td>
                                            <td>
                                                Disclaimer for Customers placing their order from within the USA<p></p>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>12.7.1</td>
                                                            <td></td>
                                                            <td>The Supplier might offer certain warranties for their (or some of their) Software, but Flexinets does not offer any warranty on Software purchased through the Flexinets Website. FLEXINETS MAKES NO WARRANTIES AND DISCLAIMS ALL REPRESENTATIONS, WARRANTIES, AND CONDITIONS WITH RESPECT TO THE SOFTWARE, WHETHER EXPRESS OR IMPLIED, INCLUDING THOSE OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, SYSTEM INTEGRATION, QUIET ENJOYMENT, AND ACCURACY.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>12.7.2</td>
                                                            <td></td>
                                                            <td>IN NO EVENT SHALL FLEXINETS BE LIABLE TO THE CUSTOMER FOR ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE OR CONSEQUENTIAL DAMAGES, WHETHER OR NOT FORESEEABLE, EVEN IF FLEXINETS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, INCLUDING ANY LOSS OF REVENUE, LOSS OF CUSTOMERS, LOSS OF GOODWILL, OR LOSS OF PROFITS, ARISING OUT OF OR IN RELATION TO THESE TERMS, WHETHER ARISING UNDER CONTRACT, TORT OR ANY OTHER LEGAL OR EQUITABLE THEORY. IN NO EVENT SHALL FLEXINETS’S TOTAL, CUMULATIVE LIABILITY HEREUNDER EXCEED THE PURCHASE PRICE FOR THE SPECIFIC PRODUCTS AND SERVICES GIVING RISE TO THE CLAIM. MULTIPLE CLAIMS WILL NOT ENLARGE THIS LIMIT. THIS LIMITATION OF LIABILITY SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY EXCLUSIVE REMEDY HEREIN.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h2>13.&nbsp; Revocation Right for Consumers</h2>
                                <p>The provisions of this Clause 13 shall only apply to Consumers who place an order from a member state of the European Union:</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>13.1</td>
                                            <td></td>
                                            <td>
                                                Revocation<p></p>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>13.1.1</td>
                                                            <td></td>
                                                            <td>Consumers shall have the right to revoke this contract within fourteen (14) days without stating a reason.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>13.1.2</td>
                                                            <td></td>
                                                            <td>
                                                                In the case of a contract for Services or a contract for the delivery of individually acquired or recurring digital content not installed on a physical data carrier, the revocation period shall be fourteen days from the date the contract was concluded.<p></p>
                                                                <p>In the case of a purchase contract for the delivery of goods (e.g. back-up CDs), the revocation period shall be fourteen days from the date on which the Consumer – or a third party designated by the Consumer who is not a freight carrier – takes possession of the goods.</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>13.1.3</td>
                                                            <td></td>
                                                            <td>
                                                                Under Section 312g (2) BGB, the right of revocation does not arise or exist<p></p>
                                                                <p>with respect to contracts for the delivery of goods if they are not ready-made but were manufactured in accordance with an individual choice or determination of the Consumer or are clearly tailored to the personal needs of the Consumer (Section 312g (2) No. 1 BGB), and</p>
                                                                <p>with respect to contracts for the delivery of audio and video recordings or computer software in a sealed package if the seal was broken after delivery (Section 312g (2) No. 6 BGB).</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>13.2</td>
                                            <td></td>
                                            <td>
                                                WAIVER OF THE RIGHT OF REVOCATION<p></p>
                                                <p>THE PROVISIONS OF THIS CLAUSE 13.2 SHALL ONLY APPLY TO CONSUMERS WHO ENTER INTO A CONTRACT FOR THE DELIVERY OF DIGITAL CONTENT NOT INSTALLED ON A PHYSICAL DATA CARRIER.</p>
                                                <p>IN ACCORDANCE WITH SECTION 356 (5) BGB, THE CONSUMER</p>
                                                <p>1) EXPRESSLY AGREES THAT FLEXINETS SHALL COMMENCE THE EXECUTION OF THIS CONTRACT BEFORE THE EXPIRATION OF THE REVOCATION PERIOD, AND</p>
                                                <p>2) IS AWARE THAT HE WILL LOSE HIS RIGHT OF REVOCATION WHEN THE EXECUTION OF THIS CONTRACT COMMENCES.</p>
                                                <p>Any money-back-guarantee or other guarantee or warranty of similar content granted by Flexinets as regulated in Clause 14 shall not be affected by this Clause.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>13.3</td>
                                            <td></td>
                                            <td>
                                                To exercise the right of revocation, the Consumer must inform Flexinets (Flexible Networks Nordic AB, Mäster Samuelsgatan 60, SE-111 21 Stockholm, Sweden tel: +46 8 546 584 20, fax: email: <a href="mailto:finance@flexinets.se">finance@flexinets.se</a> &nbsp;by making a clear declaration of his decision to revoke the contract (e.g. by letter sent by regular mail, or email.) The Consumer can use the model revocation form following these revocation instructions for this purpose, but it is not a requirement.<p></p>
                                                <p>To meet the revocation deadline, it is sufficient for the Consumer to send notice that he is exercising his right of revocation prior to the expiration of the revocation period.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>13.4</td>
                                            <td></td>
                                            <td>
                                                Legal Consequences of Revocation<p></p>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>13.4.1</td>
                                                            <td></td>
                                                            <td>If the Consumer revokes this contract, Flexinets must promptly refund all of the payments Flexinets received from the Consumer, including delivery costs, no later than fourteen days from the date on which the notice of revocation of the contract was received by Flexinets (with the exception of additional costs incurred because the Consumer has chosen a different mode of delivery than the most cost-effective one, i.e. the standard mode of delivery offered by Flexinets). For this refund, Flexinets shall use the same means of payment that was used by the Consumer in the original transaction, unless otherwise expressly agreed with the Consumer. In no case shall the Consumer be charged a fee for the refund.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>13.4.2</td>
                                                            <td></td>
                                                            <td>In the case of a contract for Services, the following shall apply: If the Consumer requested that the Services commence during the revocation period, the Consumer shall pay Flexinets a reasonable amount, which corresponds to the percentage of Services provided by the time the Consumer informs Flexinets of the exercise of his right to revoke the contract, as compared to the total scope of the Services contemplated by the contract.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>13.4.3</td>
                                                            <td></td>
                                                            <td>
                                                                If there is a purchase contract for the delivery of goods, the following shall apply: Flexinets can refuse to make a refund until it has received the goods back or until the Consumer proves that he has sent the goods back, whichever is earlier. The Consumer shall promptly return or send the goods to Flexinets no later than fourteen days from the date on which the Consumer informed Flexinets of the revocation of the contract. The deadline is met if the Consumer sends the goods before the expiration of the fourteen-day period. The Consumer shall bear the direct costs of returning the goods.<p></p>
                                                                <p>The Consumer must pay for the diminished value of the goods if the diminished value is attributable to his treating the goods in an unnecessary manner to examine their quality, characteristics, and functionality.</p>
                                                                <p><strong>End of the revocation instructions</strong></p>
                                                                <p>&nbsp;</p>
                                                                <p><strong>Model revocation form</strong></p>
                                                                <p>(If you wish to revoke the contract, please fill out this form and send it back.)</p>
                                                                <p>To Flexinets, Flexible Networks Nordic AB, Mäster Samuelsgatan 60, SE-111 21 Stockholm, Sweden tel: +46 8 546 584 20, email: <a href="mailto:finance@flexinets.se">finance@flexinets.se</a></p>
                                                                <p>I/we hereby revoke (*) the contract for the purchase of the following goods (*) /the provision of the following services (*) concluded by me/us</p>
                                                                <p>Ordered on (*) /received on (*)</p>
                                                                <p>Name of the Consumer(s)</p>
                                                                <p>Address of the Consumer(s)</p>
                                                                <p>Signature of the Consumer(s) (only for notices in paper form)</p>
                                                                <p>Date</p>
                                                                <p>(*) Please delete what does not apply.</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h2>14.&nbsp; Money-Back-Guarantee</h2>
                                <p>For certain Products and Services Flexinets offers a money-back-guarantee only as indicated on the Flexinets Website. Under this guarantee, Customers can claim a refund of the purchase price in the same manner they can exercise the right of revocation according to Clause 13.3. The claim for refund is only valid if it has been received by Flexinets within the time period indicated on the Flexinets Website.</p>
                                <h2>15.&nbsp; Cancellation of Subscriptions</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>15.1</td>
                                            <td></td>
                                            <td>Customers may cancel Subscriptions to Products and Services as indicated on the Flexinets Website. The cancellation will only become effective starting with the date of from the expiry of the then current Subscription term.</td>
                                        </tr>
                                        <tr>
                                            <td>15.2</td>
                                            <td></td>
                                            <td>Flexinets may cancel the Subscription under the same conditions as the Customer.</td>
                                        </tr>
                                        <tr>
                                            <td>15.3</td>
                                            <td></td>
                                            <td>The use of Products and Services sold by Flexinets may depend on online platforms maintained by the Supplier, data processed by the Supplier, and on the Supplier’s ability to provide the Services. If the Supplier fully or partially discontinues providing the respective online platform, stops processing the data, or stops providing the respective Services (“Shut Down”), Flexinets shall be entitled to cancel the Subscription with effect from the date of Shut Down. Flexinets shall refund Customer on a pro-rata basis for the time period of the then current Subscription term remaining after the Shut Down.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h2>16.&nbsp; Place of Performance</h2>
                                <p>In the case of contracts with Businesses, the place of delivery and payment shall be agreed as the place where Flexinets has its offices i.e. Stockholm, Sweden.</p>
                                <h2>17.&nbsp; Jurisdiction and Applicable Law</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>17.1</td>
                                            <td></td>
                                            <td>
                                                Jurisdiction and applicable law for Customers placing their order from outside the USA<p></p>
                                                <p>Customers may contact Flexinets via email at&nbsp;<a href="mailto:finance@flexinets.se">finance@flexinets.se</a> to resolve any disputes and/or claims. Consumers placing their order from a member state of the European Union can find general information about online dispute resolution obligations and mechanisms&nbsp;<a href="http://ec.europa.eu/consumers/odr/">here</a>. Flexinets does not participate in out-of-court settlement procedures in front of dispute resolution bodies.</p>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>17.1.1</td>
                                                            <td></td>
                                                            <td>
                                                                Jurisdiction and applicable law for Businesses placing their order from outside the USA<p></p>
                                                                <p>In the case of contracts with Consumers, the general jurisdiction shall be determined on the basis of the Swedish law.</p>
                                                                <p>This contract will be construed in accordance with and governed in all respects by the laws of Sweden. The provisions of the UN Convention of 11 April 1980 on Contracts for the International Sale of Goods (the Vienna Convention) shall not apply.</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>17.1.2</td>
                                                            <td></td>
                                                            <td>
                                                                Jurisdiction and applicable law for Consumers placing their order from outside the USA<p></p>
                                                                <p>The exclusive venue for all legal proceedings and/or conflicts arising in relation to this contract is Stockholm, Sweden.</p>
                                                                <p>This contract will be construed in accordance with and governed in all respects by the laws of Sweden. With orders placed by Consumers who have their habitual residence outside the Federal Republic of Sweden, mandatory regulations and mandatory protections granted by judicial decision of the respective country of residence shall remain in effect and shall apply accordingly. The provisions of the UN Convention of 11 April 1980 on Contracts for the International Sale of Goods (the Vienna Convention) shall not apply.</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>17.2</td>
                                            <td></td>
                                            <td>
                                                Jurisdiction and applicable law for Customers placing their order from within the USA (Dispute Resolution by Binding Arbitration)<p></p>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>17.2.1</td>
                                                            <td></td>
                                                            <td>
                                                                Flexinets and the Customer agree to arbitrate all disputes and claims between the two parties (the “Parties”). This contract to arbitrate is intended to be broadly interpreted. It includes, but is not limited to:<p></p>
                                                                <p>o&nbsp;&nbsp; Claims arising out of or relating to any aspect of the relationship between the Parties, whether based in contract, tort, statute, fraud, misrepresentation or any other legal theory;</p>
                                                                <p>o&nbsp;&nbsp; Claims that arose before this or any prior agreement between the Parties (including, but not limited to, claims relating to advertising);</p>
                                                                <p>o&nbsp;&nbsp; Claims that are currently the subject of purported class action litigation in which Customer is not a member of a certified class; and</p>
                                                                <p>o&nbsp;&nbsp; Claims that may arise after the termination of any agreement between the Parties.</p>
                                                                <p>Notwithstanding the foregoing, either party may bring an individual action in small claims court. Customer agrees that, by accepting these terms and conditions, Customer and Flexinets are each waiving the right to a trial by jury or to participate in a class action. The transaction between the Parties evidences a transaction in interstate commerce, and thus the Federal Arbitration Act governs the interpretation and enforcement of this provision. This arbitration provision shall survive termination of the contract entered into by the Parties.</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>17.2.2</td>
                                                            <td></td>
                                                            <td>
                                                                A party who intends to seek arbitration must first send to the other, by certified mail, a written Notice of Dispute (“Notice”). The Notice to Flexinets should be addressed to: Flexinets, Flexible Networks Nordic AB, Mäster Samuelsgatan 60, SE-111 21 Stockholm, Sweden tel: +46 8 546 584 20, email: <a href="mailto:finance@flexinets.se">finance@flexinets.se</a><p></p>
                                                                <p>, (“Notice Address”). The Notice must (a) describe the nature and basis of the claim or dispute; and (b) set forth the specific relief sought (“Demand”). If Flexinets and Customer do not reach an agreement to resolve the claim within thirty (30) days after the Notice is received, Customer or Flexinets may commence an arbitration proceeding. During the arbitration, the amount of any settlement offer made by Flexinets or Customer shall not be disclosed to the arbitrator until after the arbitrator determines the amount, if any, to which Customer or Flexinets is entitled.</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>17.2.3</td>
                                                            <td></td>
                                                            <td>After Flexinets receives notice at the Notice Address that Customer has commenced arbitration, it will promptly reimburse Customer for Customer’s payment of the filing fee. If Customer is unable to pay this fee, Flexinets will pay it directly upon receiving a written request at the Notice Address. The arbitration will be governed by the Commercial Dispute Resolution Procedures and the Supplementary Procedures for Consumer Related Disputes (collectively, “AAA Rules”) of the American Arbitration Association (“AAA”), as modified by these terms and conditions, and will be administered by the AAA. The AAA Rules are available online at www.adr.org, by calling the AAA at 1-800-778-7879, or by writing to the Notice Address. All issues are for the arbitrator to decide, including the scope of this arbitration provision, but the arbitrator is bound by the terms of these terms and conditions. Unless Flexinets and Customer agree otherwise, any arbitration hearings will take place in the county (or parish) of Customer’s billing address. If Customer’s claim is for Ten Thousand U.S Dollars (US$10,000) or less, Flexinets agrees that Customer may choose whether the arbitration will be conducted solely on the basis of documents submitted to the arbitrator through a telephonic hearing, or by an in-person hearing as established by the AAA Rules. If Customer’s claim exceeds Ten Thousand U.S Dollars (US$10,000), the right to a hearing will be determined by the AAA Rules. Except as otherwise provided for herein, Flexinets will pay all AAA filing, administration, and arbitrator fees for any arbitration initiated in accordance with the notice requirements above. If, however, the arbitrator finds that the substance of Customer’s claim or the relief sought in the Demand is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all such fees will be governed by the AAA Rules. In such case, Customer agrees to reimburse Flexinets for all monies previously disbursed by it that are otherwise Customer’s obligation to pay under the AAA Rules.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>17.2.4</td>
                                                            <td></td>
                                                            <td>
                                                                If, after finding in Customer’s favor in any respect on the merits of Customer’s claim, the arbitrator issues Customer an award that is:<p></p>
                                                                <p>o&nbsp;&nbsp; Equal to or less than the greater of (a) Two Thousand U.S. Dollars (US$2,000) or (b) the maximum claim that may be brought in small claims court in the county of the Customer’s billing address, and</p>
                                                                <p>o&nbsp;&nbsp; Greater than the value of Flexinets’s last written settlement offer made before an arbitrator was selected, then Flexinets will:</p>
                                                                <p>o&nbsp;&nbsp; Pay Customer the greater of (a) Two Thousand U.S. Dollars (US$2,000) or (b) the maximum claim that may be brought in small claims court in the county of Customer’s billing address (“the premium”) instead of the arbitrator’s award; and</p>
                                                                <p>o&nbsp;&nbsp; Pay Customer’s attorney, if any, twice the amount of attorneys’ fees, and reimburse any expenses that Customer’s attorney reasonably accrues for investigating, preparing, and pursuing the Customer’s claim in arbitration (“the attorney premium”).</p>
                                                                <p>If Flexinets did not make a written offer to settle the dispute before an arbitrator was selected, Customer and Customer’s attorney will be entitled to receive the premium and the attorney premium, respectively, if the arbitrator awards Customer any relief on the merits. The arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees, expenses, and the premium and the attorney premium at any time during the proceedings and upon request form either party made within fourteen (14) days of the arbitrator’s ruling on the merits.</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>17.2.5</td>
                                                            <td></td>
                                                            <td>The right to attorneys’ fees and expenses set forth in Clause 17.2.4 supplements any right to attorneys’ fees and expenses Customer may have under applicable law. Thus, if Customer would be entitled to a larger amount under the applicable law, this provision does not preclude the arbitrator from awarding Customer that amount. However, Customer may not recover duplicative awards of attorneys’ fees or costs. Although under some laws Flexinets may have a right to an award of attorneys’ fees and expenses if it prevails in arbitration, Flexinets agrees that it will not seek such an award.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>17.2.6</td>
                                                            <td></td>
                                                            <td>The arbitrator may award injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party’s individual claim. CUSTOMER AND FLEXINETS AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN CUSTOMER’S OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, unless both Customer and Flexinets agree otherwise, the arbitrator may not consolidate more than one person’s claims, and may not otherwise preside over any form of a representative or class proceeding. If this specific provision is found to be unenforceable, then the entirety of this arbitration provision shall be null and void.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>17.2.7</td>
                                                            <td></td>
                                                            <td>This contract will be construed in accordance with and governed in all respects by the laws of the State of Illinois, USA, without regard to any conflicts of law principles that would result in application of laws of any other jurisdiction. The United Nations Convention on Contracts for the International Sale of Goods will not apply to this contract.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h2>18.&nbsp; Entire Contract</h2>
                                <p>These Ts&amp;Cs cover the entire contract between the Parties in relation to the stated dealings and replace any previous or simultaneous agreements, communications and arrangements between the Parties (whether oral or in writing) in relation to the present subject matter. Amendments and additions to these Ts&amp;Cs shall be in writing. The written-form requirement may only be waived in writing.</p>
                                <h2>19.&nbsp; Validity</h2>
                                <p>Should a provision of these Ts&amp;Cs or a provision within the context of any other agreements be or become invalid then this shall not affect the validity of the other agreements or provisions. The applicable statutory law shall apply in place of the invalid provisions.</p>
                                <p>Flexinets and Flexible Networks Nordic AB</p>
                                <p>Version: August 2017</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <button type="button" className="btn btn-secondary" onClick={this.props.onToggle}>Close</button>
                        </ModalFooter>
                    </div>
                </form>
            </Modal>
        );
    }
}

export default TermsAndConditions;


