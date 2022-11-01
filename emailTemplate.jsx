import { useEffect, useRef } from 'react';
import { style } from './emailTemplateStyles';

import {
  HelperColSpace,
  HelperRowSpace,
  TemplateHTMLAnchorElement,
  TemplateHTMLImageElement,
  TemplateHTMLTableElement,
} from './emailTemplateComponents';

export const EmailTemplate = ({
  defaultUserDetails,
  getUserDetails: {
    addressOffice,
    addressWorkshop,
    nameFirst,
    nameFamily,
    link,
    role,
    phoneLegacy,
    phoneMobile,
    email,
    contactMessage,
    socialFacebook,
    socialLinkedIn,
  },
}) => {
  const root = useRef(null);
  const styleTable = {
    ...style,
    borderSpacing: 0,
    borderCollapse: 'collapse',
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
  };
  const propsTable = {
    border: 0,
    cellSpacing: 0,
    cellPadding: 0,
    role: 'presentation',
    width: 270,
  };

  // ----------
  // Our image assets have a 2px padding around them, to ensure they look somewhat okay on dark mode.
  // We use this style rule to offset that image padding.
  const styleImageOffset = {
    padding: '0px 2px',
  };

  // ----------

  const styleContactMessageRow = {
    ...style,
    backgroundColor: '#85C8AC',
    fontSize: '12px',
    lineHeight: '18px',
    padding: null,
  };

  // ----------

  const styleDisclaimer = {
    ...style,
    color: '#878B8E',
    fontSize: '9px',
    lineHeight: '10.5px',
  };

  // ----------

  // We're applying vendor specific CSS properties here which React would usually strip out.
  useEffect(() => {
    [...root.current.querySelectorAll('span, td, th, table, a')].forEach(el =>
      el.setAttribute('style', (el.getAttribute('style') || '') + ' mso-line-height-rule: exactly;'),
    );
    [...root.current.querySelectorAll('a')].forEach(el =>
      el.setAttribute(
        'style',
        (el.getAttribute('style') || '') +
          ' color: #000 !important; text-decoration: none !important; text-underline: none;',
      ),
    );
    [...root.current.querySelectorAll('img')].forEach(el =>
      el.setAttribute('style', (el.getAttribute('style') || '') + ' -ms-interpolation-mode: bicubic;'),
    );
    [...root.current.querySelectorAll('table'), root.current].forEach(el =>
      el.setAttribute('style', (el.getAttribute('style') || '') + ' mso-table-lspace: 0pt; mso-table-rspace: 0pt;'),
    );
  }, []);

  return (
    <table {...propsTable} style={styleTable} ref={root}>
      <tbody>
        <tr>
          {/* Column #1 */}
          {/* ---------------------------------------- */}
          <td width={300} style={{ ...style }}>
            <TemplateHTMLTableElement width={300} style={styleTable}>
              <tbody>
                <tr>
                  <td style={{ ...style, fontWeight: 800, lineHeight: 1.25, fontSize: '2em', }}>
                    {nameFirst || defaultUserDetails.nameFirst} {nameFamily || defaultUserDetails.nameFamily}
                  </td>
                </tr>
                <tr>
                  <td style={{ ...style, fontWeight: 400, lineHeight: 1.5, fontSize: '1.5em' }}>{role || defaultUserDetails.role}</td>
                </tr>
                <HelperRowSpace space={20} />
                <tr>
                  <td>
                    <TemplateHTMLTableElement width={null}>
                      <tbody>
                        <tr>
                          <td
                            width={24}
                            align="center"
                            valign="center"
                            style={{ ...style, ...styleImageOffset, width: '20px', height: '20px' }}>
                            <TemplateHTMLImageElement
                              src="https://go-graphics-email-assets.netlify.app/icon-mail@2x.png"
                              alt="Email"
                              height="16"
                              width="16"
                            />
                          </td>
                          <HelperColSpace space={8} />
                          <td>
                            {(email || defaultUserDetails.email) && (
                              <TemplateHTMLAnchorElement href={`mailto:${email || defaultUserDetails.email}`}>
                                {email || defaultUserDetails.email}
                              </TemplateHTMLAnchorElement>
                            )}
                          </td>
                        </tr>
                        <tr height="37">
                          <td
                            width="24"
                            align="center"
                            valign="center"
                            style={{ ...style, ...styleImageOffset, width: '20px', height: '20px' }}>
                            <TemplateHTMLImageElement
                              src="https://go-graphics-email-assets.netlify.app/icon-call@2x.png"
                              alt="Phone Numbers"
                              height="16"
                              width="16"
                            />
                          </td>
                          <HelperColSpace space={8} />
                          <td>
                            {(phoneLegacy || defaultUserDetails.phoneLegacy) && (
                              <TemplateHTMLAnchorElement
                                style={{ display: 'inline-block' }}
                                href={`tel:${(phoneLegacy || defaultUserDetails.phoneLegacy).replace(/\s+/g, '')}`}>
                                {phoneLegacy || defaultUserDetails.phoneLegacy}
                              </TemplateHTMLAnchorElement>
                            )}
                            <nbsp><br></br></nbsp>
                            {(phoneMobile || defaultUserDetails.phoneMobile) && (
                              <TemplateHTMLAnchorElement
                                style={{ display: 'inline-block' }}
                                href={`tel:${(phoneMobile || defaultUserDetails.phoneMobile).replace(/\s+/g, '')}`}>
                                {phoneMobile || defaultUserDetails.phoneMobile}
                              </TemplateHTMLAnchorElement>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td
                            width={24}
                            align="center"
                            valign="center"
                            style={{ ...style, ...styleImageOffset, width: '20px', height: '20px' }}>
                            <TemplateHTMLImageElement
                              src="https://go-graphics-email-assets.netlify.app/icon-map@2x.png"
                              alt="Locations"
                              height="16"
                              width="16"
                            />
                          </td>
                          <HelperColSpace space={8} />

                          <td>
                            <span><b>Office:</b> {addressOffice || defaultUserDetails.addressOffice}</span>
                            <br />
                            <span> <b>Workshop:</b> {addressWorkshop || defaultUserDetails.addressWorkshop}</span>
                          </td>
                        </tr>
                      </tbody>
                    </TemplateHTMLTableElement>
                  </td>
                </tr>
              </tbody>
            </TemplateHTMLTableElement>
          </td>
          {/* Column Spacers */}
          {/* ---------------------------------------- */}
          <HelperColSpace space={35} />
          <td width="1" style={{ border: '0.75px solid' }}></td>
          <HelperColSpace space={30} />
          {/* Column #2 */}
          {/* ---------------------------------------- */}
          <td width={150} style={{ ...style }}>
            <TemplateHTMLTableElement width={150} style={styleTable}>
              <tbody>
                <tr>
                  <td colSpan={4}>
                    <TemplateHTMLImageElement
                      src="https://i.ibb.co/5n3SsNB/GG-Logo-2021-FINAL.png"
                      alt="Go Graphics"
                      height="175"
                      width="175"
                    />
                  </td>
                </tr>
                <HelperRowSpace space={8} />
                <tr>
                  <td align="right">
                    <TemplateHTMLAnchorElement style={{ display: 'inline-block' }} href={socialFacebook}>
                      <TemplateHTMLImageElement
                        src="https://go-graphics-email-assets.netlify.app/logo-facebook@2x.png"
                        alt="Facebook"
                        height="30"
                        width="30"
                      />
                    </TemplateHTMLAnchorElement>
                  </td>
                  <HelperColSpace space={8} />
                  <td align="left">
                    <TemplateHTMLAnchorElement style={{ display: 'inline-block' }} href={socialLinkedIn}>
                      <TemplateHTMLImageElement
                        src="https://go-graphics-email-assets.netlify.app/logo-linkedin@2x.png"
                        alt="LinkedIn"
                        height="30"
                        width="30"
                      />
                    </TemplateHTMLAnchorElement>
                  </td>
                </tr>
              </tbody>
            </TemplateHTMLTableElement>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
