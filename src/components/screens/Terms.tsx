import React, { useState, useEffect } from "react";
import Lady1 from "../../img/Lady with Phone 1.png";
import Bolt from "../../img/fxemoji_bolt.svg";
import "../Validation/Valid2.css";
import { Link, useNavigate } from "react-router-dom";
import Frame from "../tools/Frame";
import FCMB from "../../img/image 17.png";
import Buttons from "../tools/Buttons";



const Conditions = (): JSX.Element => {
 

  return (
    <>
      <div className="body">
        <div className="section-1">
          <img src={Lady1} className="img-lady" alt="Lady with Phone" />
          <section>
            <div className="overlap-group-2">
              <p className="everything-is-ea-y">
                <span className="span1">Ea</span>{" "}
                <img className="fxemoji-bolt" alt="Fxemoji bolt" src={Bolt} />
                <span className="span1">y loans with </span>
                <span className="FCMB"  style={{fontWeight:"bolder", fontSize:"larger"}}>FastCash</span>
              </p>
            </div>
            <div className="div"  style={{marginLeft:"270px"}}>
              <Frame />
            </div>
          </section>
        </div>
        <div className="section-2">
          <header>
            <span>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <p>Go back home</p>
              </Link>
              <img
                src={FCMB}
                className="logo"
                style={{ width: 50 }}
                alt="Logo"
              />
            </span>
          </header>
          <br />
          <section className="Terms and Conditions">
            <h2>Terms and Condtions</h2>
            <div className="Terms-container">
           <p className="terms-content">
          

            <strong>1. General Provisions</strong><br />
            1.1. By opening an account with FCMB or using any of our services, you agree to comply with and be bound by these Terms.<br />
            1.2. FCMB reserves the right to modify these Terms at any time. Any such modifications will be effective immediately upon posting.<br />
            1.3. You are responsible for regularly reviewing these Terms. Continued use of FCMB services after any changes shall constitute your consent to such changes.<br /><br />

            <strong>2. Account Usage</strong><br />
            2.1. You must provide accurate and complete information when opening an account.<br />
            2.2. Your account must not be used for illegal activities or transactions.<br />
            2.3. You are responsible for maintaining the confidentiality of your account information, including your PIN and password.<br /><br />

            <strong>3. Loans and Credit</strong><br />
            3.1. FCMB may offer you various loan products based on your creditworthiness.<br />
            3.2. All loans are subject to approval and are governed by the loan agreement provided to you at the time of loan issuance.<br />
            3.3. You must repay your loans as agreed in the loan agreement. Failure to do so may result in penalties, additional charges, or legal action.<br /><br />

            <strong>4. Digital Banking Services</strong><br />
            4.1. FCMB provides digital banking services, including online banking and mobile apps, for your convenience.<br />
            4.2. FCMB will not be liable for any losses resulting from unauthorized access to your account due to your failure to maintain security.<br />
            4.3. FCMB reserves the right to suspend or terminate digital banking services at any time without notice.<br /><br />

            <strong>5. Fees and Charges</strong><br />
            5.1. FCMB may charge fees for certain services, including but not limited to account maintenance, ATM withdrawals, and foreign transactions.<br />
            5.2. All fees are detailed in the FCMB fee schedule, which may be updated from time to time.<br />
            5.3. You agree to pay all applicable fees as they become due.<br /><br />

            <strong>6. Liability and Indemnity</strong><br />
            6.1. FCMB shall not be liable for any losses or damages arising from your use of our services, except where such losses are caused by our gross negligence or willful misconduct.<br />
            6.2. You agree to indemnify and hold FCMB harmless from any claims, losses, or damages arising out of your breach of these Terms or misuse of our services.<br /><br />

            <strong>7. Governing Law and Dispute Resolution</strong><br />
            7.1. These Terms are governed by the laws of the Federal Republic of Nigeria.<br />
            7.2. Any disputes arising out of or in connection with these Terms shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act.<br /><br />

            <strong>8. Miscellaneous</strong><br />
            8.1. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable.<br />
            8.2. FCMB’s failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.<br />
            8.3. These Terms constitute the entire agreement between you and FCMB regarding your use of our services.<br /><br />

            <strong>9. Additional Provisions for Loan Products</strong><br />
            9.1. Loan products may include but are not limited to personal loans, auto loans, mortgage loans, and business loans.<br />
            9.2. Interest rates on loans will be determined based on various factors, including the applicant's creditworthiness, the loan amount, and the repayment period.<br />
            9.3. Early repayment of loans may attract penalties as specified in the loan agreement.<br />
            9.4. Failure to repay loans on time may result in FCMB reporting your account to credit bureaus, which could affect your credit rating.<br /><br />

            <strong>10. Account Termination and Suspension</strong><br />
            10.1. FCMB reserves the right to suspend or terminate your account at any time if you violate these Terms or engage in activities that could harm FCMB’s reputation or operations.<br />
            10.2. In the event of account suspension or termination, you will be notified via your registered contact information.<br />
            10.3. Upon termination, you must immediately settle any outstanding obligations owed to FCMB.<br /><br />

            <strong>11. Privacy and Data Protection</strong><br />
            11.1. FCMB is committed to protecting your privacy and ensuring that your personal data is handled in accordance with applicable data protection laws.<br />
            11.2. By using FCMB’s services, you consent to the collection, use, and sharing of your personal information as described in our Privacy Policy.<br />
            11.3. FCMB will take reasonable measures to ensure that your data is secure, but we cannot guarantee absolute security against cyber threats.<br /><br />

            <strong>12. Notices and Communications</strong><br />
            12.1. FCMB will communicate with you via your registered contact information, including email, SMS, and postal mail.<br />
            12.2. It is your responsibility to ensure that your contact information is accurate and up to date.<br />
            12.3. FCMB is not responsible for any communication failures due to incorrect or outdated contact information.<br /><br />

            <strong>13. Intellectual Property</strong><br />
            13.1. All content and materials provided by FCMB, including logos, trademarks, and proprietary information, are the intellectual property of FCMB.<br />
            13.2. You may not use, reproduce, or distribute any content or materials from FCMB without our express written consent.<br />
            13.3. Unauthorized use of FCMB’s intellectual property may result in legal action.<br /><br />

            <strong>14. Amendments to Terms</strong><br />
            14.1. FCMB reserves the right to amend these Terms at any time.<br />
            14.2. Any amendments will be effective immediately upon posting on the FCMB website or notification to you.<br />
            14.3. Your continued use of FCMB’s services after any amendments constitutes your acceptance of the revised Terms.<br /><br />

            <strong>15. Contact Information</strong><br />
            15.1. If you have any questions or concerns regarding these Terms or FCMB’s services, please contact us at:<br />
            FCMB Headquarters<br />
            Primrose Tower, 17A Tinubu Street,<br />
            Lagos Island, Lagos, Nigeria<br />
            Phone: +234 700 329 0000<br />
            Email: info@fcmb.com<br /><br />

            <strong>16. Special Terms for Digital Services</strong><br />
            16.1. FCMB offers a range of digital services, including online banking, mobile banking, and electronic fund transfers.<br />
            16.2. You agree to comply with all security protocols and guidelines provided by FCMB when using digital services.<br />
            16.3. FCMB is not liable for any losses resulting from unauthorized access to your digital banking account due to your negligence.<br /><br />

            <strong>17. Dispute Resolution and Arbitration</strong><br />
            17.1. Any disputes arising out of or in connection with these Terms shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, Cap A18, Laws of the Federation of Nigeria 2004.<br />
            17.2. The arbitration shall be conducted by a sole arbitrator appointed by the Chairman of the Chartered Institute of Arbitrators UK (Nigeria Branch).<br />
            17.3. The arbitration proceedings shall take place in Lagos, Nigeria, and shall be conducted in English.<br />
            17.4. The decision of the arbitrator shall be final and binding on the parties.<br /><br />

            <strong>18. Termination of Services</strong><br />
            18.1. FCMB reserves the right to terminate your access to any or all of our services at any time, with or without cause or notice.<br />
            18.2. Upon termination, you must immediately cease using FCMB’s services and settle any outstanding obligations owed to FCMB.<br />
            18.3. FCMB will not be liable to you or any third party for termination of your access to our services.<br /><br />

            <strong>19. Force Majeure</strong><br />
            19.1. FCMB shall not be liable for any failure to perform its obligations under these Terms if such failure is caused by events beyond its reasonable control, including but not limited to acts of God, war, strikes, or government actions.<br />
            19.2. In the event of a force majeure event, FCMB shall be relieved of its obligations under these Terms to the extent that the event prevents or delays performance.<br /><br />

            <strong>20. Entire Agreement</strong><br />
            20.1. These Terms constitute the entire agreement between you and FCMB regarding your use of our services and supersede any prior agreements or understandings.<br />
            20.2. No oral or written statements made by FCMB or its representatives shall amend these Terms unless such amendments are provided in writing and signed by an authorized representative of FCMB.<br /><br />

            <strong>21. Severability</strong><br />
            21.1. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable.<br />
          </p>

            </div>
           
          </section>
        </div>

       
      </div>
    </>
  );
};

export default Conditions;
