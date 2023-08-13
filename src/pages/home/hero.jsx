import React from 'react'

import useIsBrowser from '@docusaurus/useIsBrowser'
import config from './languages.json'
import RocketIcon from "../../../static/home/rocket.svg"
import BlockIcon from "../../../static/home/block.svg"
import StartUp from "../../../static/home/dashboard.svg"
import Wave from "../../../static/home/wave.svg"
export default function () {
  const isBrowser = useIsBrowser();
  const language = isBrowser && location.pathname.indexOf('/zh-CN/') === 0 ? 'zh-CN' : 'en'
  const dataSource = config?.[language];

  return (
      <div className="section bg-gradient-primary pb-9 pt-7 overflow-hidden">

      {/* background overlay */}
      <div className="overlay bg-gradient-primary opacity-90 z-index-n1"></div>

      {/* rocket moving up animation */}
      <div className="particle">
        <div className="particle-move-up d-none d-block particle-move-up-1 text-light z-index-n1 opacity-60">
          <RocketIcon width="2rem" height="2rem" />
        </div>
        <div className="particle-move-up particle-move-up-2 text-light z-index-n1 opacity-60">
          <RocketIcon width="1rem" height="1rem" />
        </div>
        <div className="particle-move-up d-none d-sm-block particle-move-up-3 text-light z-index-n1 opacity-60">
          <RocketIcon width="1.5rem" height="1.5rem" />
        </div>
        <div className="particle-move-up d-none d-xl-block particle-move-up-4 text-light z-index-n1 opacity-60">
          <RocketIcon width="1rem" height="1rem" />
        </div>
        <div className="particle-move-up d-none d-sm-block particle-move-up-5 text-light z-index-n1 opacity-60">
          <RocketIcon width="1.2rem" height="1.2rem" />
        </div>
        <div className="particle-move-up border-success text-light particle-move-up-6 z-index-n1 opacity-60">
          <RocketIcon width="2rem" height="2rem" />
        </div>
        <div className="particle-move-up particle-move-up-7 z-index-n1 text-light opacity-60">
          <RocketIcon width="1.5rem" height="1.5rem" />
        </div>
        <div className="particle-move-up particle-move-up-8 z-index-n1 text-light opacity-60">
          <RocketIcon width="1.2rem" height="1.2rem" />
        </div>
        <div className="particle-move-up particle-move-up-9 z-index-n1 text-light opacity-60">
          <RocketIcon width="2rem" height="2rem" />
        </div>
      </div>

      {/* scribble */}
      <figure className="scribble scale-4 opacity-10 top-50 start-0 z-index-n1" data-aos="fade-up-right" data-delay-aos="300">
        <BlockIcon className="text-secondary" />
      </figure>

      {/* scribble */}
      <figure className="scribble scale-5 opacity-10 top-50 start-0 z-index-n1" data-aos="fade-up-right" data-delay-aos="200">
        <BlockIcon className="text-secondary" />
      </figure>

      {/* scribble */}
      <figure className="scribble scale-6 opacity-10 top-50 start-0 z-index-n1" data-aos="fade-up-right" data-delay-aos="100">
        <BlockIcon className="text-secondary" />
      </figure>

      {/* scribble */}
      <figure className="scribble scale-7 opacity-10 top-50 start-0 z-index-n1" data-aos="fade-up-right">
        <BlockIcon className="text-secondary" />
      </figure>

      <div className="container-fluid px-7 pb-2">
        <div className="row justify-content-center">
          <div className="col-md-6 col-8 align-self-center pe-5" data-aos="fade-right">
            <div className="text-start mt-0">
              <div className="mb-5 system_info pt-0">
                <div className="project_title fw-bold text-white mb-3">
                  <div className="d-flex justify-content-center align-items-start">
                    <div className="animated-gradient-text_background animated-gradient-text_background-2" style={{ '--content': '"SolidUI"', '--start-color': '#FFF', '--end-color': '#00DFD8' }}>
                      <span className="animated-gradient-text_foreground animated-gradient-text_foreground-2">SolidUI</span>
                    </div>
                  </div>
                </div>
                <p className="lead text-light text-center">{dataSource.slogan.description}</p>
              </div>
              <div className="d-flex justify-content-center align-items-start">
                <a className="btn streampark-btn btn mt-30 ztop" href="https://github.com/CloudOrc/SolidUI"
                  target="_blank">
                  <i className="lni-github-original"></i>&nbsp;GitHub
                </a>
                <a className="btn streampark-btn btn-green mt-30 ml-3 ztop" href="/docs/user-guide/quick-start"
                  style={{ marginLeft: '10px' }}>
                  <i className="lni-play"></i>&nbsp;Get started
                </a>
              </div>
           
              <div style={{ marginTop: '20px' }}  className="shields ztop d-flex justify-content-center align-items-start">
                <a target="_blank" href="https://www.apache.org/licenses/LICENSE-2.0.html">
                  <img src="https://img.shields.io/badge/license-Apache%202-4EB1BA.svg" className="wow fadeInUp"></img>
                </a>
                <a target="_blank" href="https://github.com/CloudOrc/SolidUI">
                  <img src="https://img.shields.io/github/stars/CloudOrc/SolidUI.svg?sanitize=true" className="wow fadeInUp"></img>
                </a>
                <a target="_blank" href="https://github.com/CloudOrc/SolidUI/fork">
                  <img src="https://img.shields.io/github/forks/CloudOrc/SolidUI.svg?sanitize=true" className="wow fadeInUp"></img>
                </a>
                <a href="">
                  <img src="https://img.shields.io/github/languages/count/CloudOrc/SolidUI" className="wow fadeInUp"></img>
                </a>
                <a target="_blank" href="https://huggingface.co/spaces/CloudOrc/SolidUI">
                  <img src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face%20Spaces-blue" className="wow fadeInUp" />
                </a>
                <a href="https://www.producthunt.com/posts/solidui?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-solidui" target="_blank">
                  <img src="https://img.shields.io/badge/producthunt-orange"  className="wow fadeInUp" />
                </a>
                <a target="_blank" href="https://join.slack.com/t/solidui/shared_invite/zt-1r83iino0-SZD38aHAIw2KBA~DSpZndA">
                  <img src="https://img.shields.io/badge/join-us%20on%20slack-gray.svg?longCache=true&logo=slack&colorB=red" className="wow fadeInUp"/>
                </a>
                <a target="_blank" href="https://discord.gg/brKfUUXg">
                  <img src="https://img.shields.io/discord/1110556150199504958" className="wow fadeInUp"/>
                </a>
              </div>
            </div>
          </div>
          {/* hero image */}
          {/* <div className="col-6 align-self-center" >
            <div className="mt-5 mt-2 text-right" data-aos="fade-up" data-aos-delay="100">
             <StartUp className="img-fluid" style={{transform: 'translateY(3.3rem)'}} />
            </div>
          </div> */}
        </div>
      </div >

      {/* waves start */}
      <figure className="waves-bottom-center text-light mb-n4 z-index-n1" >
        <Wave />
      </figure>

    </div >
  );
}
