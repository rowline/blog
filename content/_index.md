---
title: "Home"
date: 2026-03-18
---

<div class="text-center mt-6 mb-8 px-4">
  <h1 class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight leading-loose drop-shadow-sm pb-2">Product Planner <br class="md:hidden" />& Indie Vibe Coder</h1>

  {{< lead >}}
  白天致力于智能机器人的产品规划与落地，夜晚沉浸在 AI 驱动的全栈开发与独立产品的世界里。此外，我也是一名铁人三项爱好者。

  Bridging the gap between robotics product planning and rapid AI-driven software development.
  {{< /lead >}}
</div>

<div class="flex justify-center gap-3 flex-wrap mb-16 px-2">
  <span class="px-5 py-2 bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 rounded-full text-sm font-bold shadow-sm backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 transition-transform hover:-translate-y-1">Product Planner</span>
  <span class="px-5 py-2 bg-rose-100/80 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300 rounded-full text-sm font-bold shadow-sm backdrop-blur-sm border border-rose-200 dark:border-rose-800/60 transition-transform hover:-translate-y-1">Triathlete</span>
  <span class="px-5 py-2 bg-fuchsia-100/80 text-fuchsia-800 dark:bg-fuchsia-900/50 dark:text-fuchsia-300 rounded-full text-sm font-bold shadow-sm backdrop-blur-sm border border-fuchsia-200 dark:border-fuchsia-800/60 transition-transform hover:-translate-y-1">Indie Hacker</span>
  <span class="px-5 py-2 bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 rounded-full text-sm font-bold shadow-sm backdrop-blur-sm border border-emerald-200 dark:border-emerald-800/60 transition-transform hover:-translate-y-1">AI Vibe Coder</span>
</div>


<!-- ======================= -->
<!-- INDIE PROJECTS / CARDS  -->
<!-- ======================= -->
<div class="mt-8 mb-10 text-center">
  <h2 class="text-3xl lg:text-4xl font-extrabold flex items-center justify-center gap-3">{{< icon "code" >}} Projects & Products</h2>
  <p class="text-neutral-500 dark:text-neutral-400 mt-3 text-lg">独立创造，探索效率上限。</p>
</div>

<div class="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 mb-20 text-left">
  
  <!-- Suisuinian Card -->
  <div class="flex flex-col bg-white dark:bg-neutral-800/80 rounded-[2rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-neutral-100 dark:border-neutral-700/60 backdrop-blur-xl group hover:-translate-y-1">
    <div class="flex items-center gap-4 mb-5">
      <div class="p-3.5 bg-neutral-50 dark:bg-neutral-700/50 rounded-2xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/40 transition-colors shadow-inner">
        <span class="w-6 h-6 flex text-neutral-700 dark:text-neutral-200">{{< icon "apple" >}}</span>
      </div>
      <h3 class="text-xl font-bold text-neutral-900 dark:text-white m-0">碎碎念 (Suisuinian)</h3>
    </div>
    <p class="text-sm/relaxed text-neutral-600 dark:text-neutral-300 mb-6 flex-grow">
      聚焦于 iOS 端的深度个人知识与碎片化信息管理体系。重构了 Universal Vault 架构与统一的 MVVM 范式，实现 Apple Native 体系下高度定制化的 AI 意图识别 (Intent-Based Linking) 与 Vision Intelligence 后台解析。
    </p>
    <div class="flex flex-wrap gap-2 mt-auto pt-5 border-t border-neutral-100 dark:border-neutral-700/50">
      <span class="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">SwiftUI</span>
      <span class="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">CloudKit</span>
      <span class="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">AI Intent</span>
    </div>
  </div>

  <!-- Race Log Card -->
  <div class="flex flex-col bg-white dark:bg-neutral-800/80 rounded-[2rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-neutral-100 dark:border-neutral-700/60 backdrop-blur-xl group relative overflow-hidden hover:-translate-y-1">
    <a href="/racelog/" class="absolute inset-0 z-10"><span class="sr-only">Go to Race Log</span></a>
    <div class="flex items-center gap-4 mb-5">
      <div class="p-3.5 bg-neutral-50 dark:bg-neutral-700/50 rounded-2xl group-hover:bg-rose-50 dark:group-hover:bg-rose-900/40 transition-colors shadow-inner">
         <span class="w-6 h-6 flex text-neutral-700 dark:text-neutral-200">{{< icon "location-dot" >}}</span>
      </div>
      <h3 class="text-xl font-bold text-neutral-900 dark:text-white m-0 tracking-tight">Race & Sports Log</h3>
    </div>
    <p class="text-sm/relaxed text-neutral-600 dark:text-neutral-300 mb-6 flex-grow">
      将自身作为铁人三项爱好者的运动轨迹与极客技术深度结合的大屏数据中枢。将独立开发的 React 交互式地图面板以无缝沙盒的形式完美嵌入 Hugo 引擎。实现了跨技术栈的共享主题与组件化导航。
    </p>
    <div class="flex flex-wrap gap-2 mt-auto pt-5 border-t border-neutral-100 dark:border-neutral-700/50">
      <span class="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">React & Vite</span>
      <span class="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">Mapbox GL</span>
      <span class="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">Tailwind</span>
    </div>
  </div>

  <!-- Mini Program Card -->
  <div class="flex flex-col bg-white dark:bg-neutral-800/80 rounded-[2rem] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-neutral-100 dark:border-neutral-700/60 backdrop-blur-xl group hover:-translate-y-1">
    <div class="flex items-center gap-4 mb-5">
      <div class="p-3.5 bg-neutral-50 dark:bg-neutral-700/50 rounded-2xl group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/40 transition-colors shadow-inner">
        <span class="w-6 h-6 flex text-neutral-700 dark:text-neutral-200">{{< icon "globe" >}}</span>
      </div>
      <h3 class="text-xl font-bold text-neutral-900 dark:text-white m-0">"小鸡小程序"</h3>
    </div>
    <p class="text-sm/relaxed text-neutral-600 dark:text-neutral-300 mb-6 flex-grow">
      部署于微信生态内的高可用、轻量级互动前端。完全由 AI Agent 辅助 Vibe Coding，单人实现了从立项设计、交互逻辑、服务端云函数数据落库，再到合规提审的完整商业侧敏捷闭环。
    </p>
    <div class="flex flex-wrap gap-2 mt-auto pt-5 border-t border-neutral-100 dark:border-neutral-700/50">
      <span class="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">WX Mini-Program</span>
      <span class="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">Cloud Funcs</span>
      <span class="text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">Agentic Dev</span>
    </div>
  </div>

</div>


<!-- ======================= -->
<!-- PRODUCT PLANNING        -->
<!-- ======================= -->
<div class="mt-20 mb-10 text-center">
  <h2 class="text-3xl lg:text-4xl font-extrabold flex items-center justify-center gap-3">{{< icon "lightbulb" >}} Product Planning & Education</h2>
  <p class="text-neutral-500 dark:text-neutral-400 mt-3 text-lg">从机器人的商业落地，到微观技术布道。</p>
</div>

<div class="max-w-4xl mx-auto px-4 mb-20 text-left">
{{< timeline >}}
  {{< timelineItem icon="pencil" header="机器人产品规划与落地" badge="Product Planning" >}}
在具身智能公司负责核心的产品规划工作，主导并在宏观层面推演了诸如“产品需求分析”、“技术选型”、“产品迭代策略”等核心层面的落地策略，并将枯燥的产品规划文档转化为高度沉浸式的纯前端交互式演示面板。
  {{< /timelineItem >}}

  {{< timelineItem icon="wand-magic-sparkles" header="《Vibe Coding》独立编程启蒙课" badge="Education" >}}
正在筹备并持续打磨的 AI 全栈开发实战课程。倡导“少即是多”的敏捷架构哲学。旨在帮助各种角色（包括毫无经验背景的初学者），利用最新的 AI Agent 作为杠杆，自己动手将创意送上服务器。
  {{< /timelineItem >}}
{{< /timeline >}}
</div>

<!-- ======================= -->
<!-- TECH RADAR              -->
<!-- ======================= -->
<div class="mt-20 mb-10 text-center">
  <h2 class="text-3xl lg:text-4xl font-extrabold flex items-center justify-center gap-3">{{< icon "star" >}} Tech Radar & Playbook</h2>
  <p class="text-neutral-500 dark:text-neutral-400 mt-3 text-lg">我的核心技术工具流与人机协同理念：</p>
</div>

<div class="not-prose w-full max-w-5xl mx-auto px-4 mb-24 text-left">
<div class="bg-gradient-to-br from-neutral-50 to-neutral-100/50 dark:from-neutral-800/80 dark:to-neutral-900/80 rounded-[2.5rem] p-8 md:p-12 border border-neutral-200/60 dark:border-neutral-700/60 shadow-sm relative overflow-hidden backdrop-blur-xl">
<!-- Decorative background blobs -->
<div class="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none"></div>
<div class="absolute -bottom-32 -left-32 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none"></div>

<div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10">

<!-- Left Column (Tags) -->
<div class="md:col-span-5 flex flex-col gap-8">
<!-- Skill Category -->
<div>
<h4 class="text-xs uppercase tracking-widest font-extrabold text-neutral-400 dark:text-neutral-500 mb-4 flex items-center gap-2">
<span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>核心矩阵
</h4>
<div class="flex flex-wrap gap-2.5">
<span class="px-3 py-1.5 bg-white/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-200 rounded-lg shadow-sm text-sm border border-neutral-200 dark:border-neutral-700/50 backdrop-blur-sm">商业化产品规划落地</span>
<span class="px-3 py-1.5 bg-white/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-200 rounded-lg shadow-sm text-sm border border-neutral-200 dark:border-neutral-700/50 backdrop-blur-sm">高负载运动与铁人三项</span>
<span class="px-3 py-1.5 bg-blue-50/80 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg shadow-sm text-sm font-bold border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm">AI Agentic Orchestration</span>
</div>
</div>

<!-- Skill Category -->
<div>
<h4 class="text-xs uppercase tracking-widest font-extrabold text-neutral-400 dark:text-neutral-500 mb-4 flex items-center gap-2">
<span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Front-End & Mobile
</h4>
<div class="flex flex-wrap gap-x-2.5 gap-y-3">
<span class="font-bold text-neutral-800 dark:text-white px-3 py-1.5 bg-white/80 dark:bg-neutral-800/80 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700/50">SwiftUI</span>
<span class="font-bold text-neutral-800 dark:text-white px-3 py-1.5 bg-white/80 dark:bg-neutral-800/80 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700/50">React</span>
<span class="font-bold text-neutral-800 dark:text-white px-3 py-1.5 bg-white/80 dark:bg-neutral-800/80 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700/50">Vite</span>
<span class="font-bold text-neutral-800 dark:text-white px-3 py-1.5 bg-white/80 dark:bg-neutral-800/80 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700/50">Tailwind CSS</span>
<span class="font-bold text-neutral-800 dark:text-white px-3 py-1.5 bg-white/80 dark:bg-neutral-800/80 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700/50">Hugo Blowfish</span>
</div>
</div>
</div>

<!-- Right Column (Playbook Intro) -->
<div class="md:col-span-7 flex flex-col justify-center">
<h4 class="text-xs uppercase tracking-widest font-extrabold text-neutral-400 dark:text-neutral-500 mb-4 flex items-center gap-2">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Workflow AI
</h4>
<div class="bg-white/90 dark:bg-neutral-800/90 p-6 md:p-8 rounded-[1.5rem] shadow-sm border border-neutral-200/80 dark:border-neutral-700/80 backdrop-blur-md">
<p class="text-base/loose md:text-lg/loose text-neutral-700 dark:text-neutral-300">
深度实践 <strong class="text-emerald-600 dark:text-emerald-400 font-black">Agentic AI 结对编程</strong>。提炼并开源维护了包括<span class="underline decoration-indigo-200 dark:decoration-indigo-800 underline-offset-4">“生日祝福语义结构解析”</span>、<span class="underline decoration-indigo-200 dark:decoration-indigo-800 underline-offset-4">“剪贴板极速代理工作流”</span>、<span class="underline decoration-indigo-200 dark:decoration-indigo-800 underline-offset-4">“全域组件防冲突沙盒 (Preflight Bleed Defense)”</span>在内的大量高可用人机协同 Prompt 法则和底层效率脚本。
</p>
</div>
</div>

</div>
</div>
</div>

<div class="w-full text-center mt-6 mb-16">
  <div class="not-prose inline-block py-6 px-10 rounded-full bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 transform hover:scale-105 transition-transform duration-500 backdrop-blur-sm">
    <p class="text-xl md:text-2xl font-serif italic text-neutral-500 dark:text-neutral-400 tracking-wide">
      "The best way to predict the future is to <span class="text-blue-600 dark:text-blue-400 font-extrabold not-italic">vibe-code</span> it."
    </p>
  </div>
</div>
