/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SolidUI',
  tagline: 'AI-generated visualization prototyping and editing platform, support 2D, 3D models, combined with LLM(Large Language Model) for quick editing.',
  url: 'https://cloudorc.github.io/SolidUI-Website',
  baseUrl: '/',

    // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CloudOrc', // Usually your GitHub org/user name.
  projectName: 'SolidUI-Website', // Usually your repo name.
  
  deploymentBranch: 'main', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  favicon: 'image/favicon.ico',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"],
    localeConfigs: {
      en: {
        label: "English",
        direction: 'ltr',
      },
      'zh-CN': {
        label: "简体中文",
        direction: 'ltr',
      },
    },
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // config url is: https://github.com/easyops-cn/docusaurus-search-local#theme-options
        hashed: true,
        indexDocs: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: false, // Highlight search terms on target page.
        explicitSearchResultPath: true,
        searchBarPosition: "right",
        searchBarShortcutHint: false, // Whether to show keyboard shortcut hint in search bar. Disable it if you need to hide the hint while shortcut is still enabled.
        language: ["zh", "en"],
        hideSearchBarWithNoSearchContext: true,
      }),
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          editLocalizedFiles: true,
          sidebarCollapsed: false,
          // Please change this to your repo.
          editUrl: 'https://github.com/CloudOrc/SolidUI-Website/edit/dev'
        },

        blog: {
          path: 'blog',
          postsPerPage: 3,
          blogSidebarCount: 'ALL',
          feedOptions:{type: 'all'},
          // Please change this to your repo.
          editUrl: 'https://github.com/CloudOrc/SolidUI-Website/edit/dev',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    navbar: {
      title: 'SolidUI',
      logo: {
        alt: 'SolidUI Logo',
        src: 'image/logo.png',
      },
      items: [
        {
          to: '/docs/intro',
          label: 'Document',
          position: 'left',
          activeBaseRegex: `/docs`,
        },
        {
          position: 'left',
          label: 'Download',
          items: [
            {
              label: "Releases",
              to: "https://github.com/CloudOrc/SolidUI/releases",
            }
            ],
        },
        {
          label: 'Community',
          position: 'left',
          items: [
            {
              label: "Code of conduct",
              to: "https://www.apache.org/foundation/policies/conduct",
            },
            {
              label: "Become A Committer",
              to: "/community/contribution_guide/become_committer",
            },

            {
              label: "Documentation Notice",
              to: "/community/submit_guide/document",
            },
            {
              label: "Submit Code",
              to: "/community/submit_guide/submit_code",
            },
          ],
        },
        {
          to: '/team',
          label: 'Team',
          position: 'left',
          activeBaseRegex: `/team`,
        },
        {
          label: 'Users',
          position: 'left',
          items: [
            {
              label: "Our Users",
              to: "https://github.com/CloudOrc/SolidUI/issues/1",
            }
          ],
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
          activeBaseRegex: `/blog`,
        },
        {
          label: 'ASF',
          position: 'left',
          items: [
            {
              label: "Foundation",
              to: "https://www.apache.org/",
            },
            {
              label: "License",
              to: "https://www.apache.org/licenses/",
            },
            {
              label: "Events",
              to: "https://www.apache.org/events/current-event",
            },
            {
              label: "Security",
              to: "https://www.apache.org/security/",
            },
            {
              label: "Sponsorship",
              to: "https://www.apache.org/foundation/sponsorship.html",
            },
            {
              label: 'Privacy',
              to: 'https://www.apache.org/foundation/policies/privacy.html'
            },
            {
              label: "Thanks",
              to: "https://www.apache.org/foundation/thanks.html",
            },
          ],
        },
        {
          href: 'https://github.com/CloudOrc/SolidUI',
          label: 'GitHub',
          position: 'left',
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              html: `
                  <div class="footer-left-box">
                    <div class="flex align-center footer-system">
                      <span class='system-title'>About SolidUI</span>
                    </div>
                    <p>AI-generated visualization prototyping and editing platform, support 2D, 3D models, combined with LLM(Large Language Model) for quick editing.</p>
                  </div>
                `,
            }
          ],
        },
        {
          title: 'Resource',
          items: [
            {
              label: 'Document',
              href: '/docs/intro',
            },
            {
              label: 'Releases',
              href: 'https://github.com/CloudOrc/SolidUI/releases',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/CloudOrc/SolidUI',
            },
            {
              label: 'Issue Tracker',
              href: 'https://github.com/CloudOrc/SolidUI/issues',
            },
            {
              label: 'Pull Requests',
              href: 'https://github.com/CloudOrc/SolidUI/pulls',
            },
          ],
        },
        {
          title: "Follow",
          items: [
            {
              html: `
                <div class="subscribe-box">
<!--                    <div class="d-flex align-items-center" style="margin-bottom: 30px;padding-top: 11px">-->
<!--                      <div class="subscribe-input flex-fill">-->
<!--                        <input class="form-control" id="email_address" maxLength="60" type="text" name="email_address" placeholder="Subscribe with us">-->
<!--                      </div>-->
<!--                      <div class="subscribe-submit-inner">-->
<!--                        <a class="btn btn-white m-0" type="submit" href="mailto:dev-subscribe@streampark.apache.org">-->
<!--                          <span><i class="fa fa-paper-plane text-white"></i></span>-->
<!--                        </a>-->
<!--                      </div>-->
<!--                    </div>-->
                    <ul class="icon-bottom">
                        <li>
                          <a href="javascript:void(0)">
                            <i class="fa fa-wechat"></i>
                            <div class="wechat-dropdown"><img src="/image/join_wechat.png" alt="weChat"></div>
                          </a>
                        </li>
                        <li><a href="https://twitter.com/dlimeng192048"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://join.slack.com/t/solidui/shared_invite/zt-1r83iino0-SZD38aHAIw2KBA~DSpZndA"><i class="fa fa-slack"></i></a></li>
                        <li><a href="https://www.youtube.com/@dlimeng"><i class="fa fa-youtube"></i></a></li>
                    </ul>
                </div>
              `,
            }
          ],
        }
      ],
      copyright: `
            <div  style="text-align: left;margin-top:30px">
                <div class="d-flex align-items-center">
                    
                    <div>
                      <p style="font-family: Avenir-Medium;font-size: 14px;color: #999;line-height: 25px;">
                      AI-generated visualization prototyping and editing platform, support 2D, 3D models, combined with LLM(Large Language Model) for quick editing.
                      </p>
                  </div>
                </div>

                <div style="border-top: 1px solid #525252;min-height: 60px;line-height: 25px;text-align: left;font-family: Avenir-Medium;font-size: 14px;color: #999;display: flex;align-items: center;">
                  <span>
                      Copyright © 2022-${new Date().getFullYear()} The Apache Software Foundation. SolidUI.
                  </span>
                </div>
            </div>`,
    },

    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: darkCodeTheme,
      additionalLanguages: ['powershell', 'java', 'scala', 'yaml'],
    }

  }),

  plugins: [
    'docusaurus-plugin-less',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ]
};

module.exports = config;
