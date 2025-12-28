export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large gradient orbs - very subtle */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-100/20 dark:from-blue-500/10 dark:to-cyan-400/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-purple-100/15 dark:from-indigo-500/10 dark:to-purple-400/5 rounded-full blur-3xl animate-float-slower" />
      
      {/* Floating icons/shapes */}
      <div className="absolute top-1/4 left-[10%] animate-float">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 dark:from-blue-400/20 dark:to-blue-500/20 backdrop-blur-sm border border-blue-200/30 dark:border-blue-500/20 flex items-center justify-center rotate-12">
          <svg className="w-6 h-6 text-blue-400/60 dark:text-blue-400/80" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>
      </div>
      
      <div className="absolute top-1/3 right-[15%] animate-float-delayed">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/10 to-teal-600/10 dark:from-cyan-400/20 dark:to-teal-500/20 backdrop-blur-sm border border-cyan-200/30 dark:border-cyan-500/20 flex items-center justify-center -rotate-6">
          <svg className="w-5 h-5 text-cyan-400/60 dark:text-cyan-400/80" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-1/4 left-[20%] animate-float-slow">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/10 to-violet-600/10 dark:from-indigo-400/20 dark:to-violet-500/20 backdrop-blur-sm border border-indigo-200/30 dark:border-indigo-500/20 flex items-center justify-center rotate-45">
          <svg className="w-4 h-4 text-indigo-400/60 dark:text-indigo-400/80 -rotate-45" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-1/3 right-[10%] animate-float-delayed-slow">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-600/10 dark:from-purple-400/20 dark:to-pink-500/20 backdrop-blur-sm border border-purple-200/30 dark:border-purple-500/20 flex items-center justify-center -rotate-12">
          <svg className="w-7 h-7 text-purple-400/60 dark:text-purple-400/80" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
          </svg>
        </div>
      </div>
      
      <div className="absolute top-2/3 left-[5%] animate-float">
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-500/10 to-green-600/10 dark:from-emerald-400/20 dark:to-green-500/20 backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-500/20 flex items-center justify-center rotate-6">
          <span className="text-emerald-400/60 dark:text-emerald-400/80 text-xs font-bold">#</span>
        </div>
      </div>
      
      <div className="absolute top-[15%] right-[25%] animate-float-slower">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-600/10 dark:from-amber-400/20 dark:to-orange-500/20 backdrop-blur-sm border border-amber-200/30 dark:border-amber-500/20 flex items-center justify-center -rotate-12">
          <span className="text-amber-400/60 dark:text-amber-400/80 text-sm font-bold">*</span>
        </div>
      </div>
      
      {/* Decorative dots */}
      <div className="absolute top-[40%] left-[30%] w-2 h-2 rounded-full bg-blue-400/30 dark:bg-blue-400/40 animate-pulse" />
      <div className="absolute top-[60%] right-[30%] w-3 h-3 rounded-full bg-indigo-400/20 dark:bg-indigo-400/30 animate-pulse delay-1000" />
      <div className="absolute top-[20%] left-[40%] w-2 h-2 rounded-full bg-cyan-400/30 dark:bg-cyan-400/40 animate-pulse delay-500" />
      <div className="absolute bottom-[20%] right-[40%] w-2 h-2 rounded-full bg-purple-400/30 dark:bg-purple-400/40 animate-pulse delay-700" />
    </div>
  )
}

