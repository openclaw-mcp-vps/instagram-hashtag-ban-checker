export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Hashtag Visibility Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Are your hashtags<br />
          <span className="text-[#58a6ff]">shadowbanned?</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Instantly check if your Instagram hashtags are restricted or shadowbanned before you post. Protect your reach and grow your audience with confidence.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Checking — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Demo badge strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["#photography", "#instagood", "#reels", "#explore", "#viral"].map((tag) => (
            <span
              key={tag}
              className="bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-sm px-3 py-1 rounded-full"
            >
              {tag}
              <span className="ml-2 text-[#3fb950] text-xs font-semibold">✓ Safe</span>
            </span>
          ))}
          <span className="bg-[#161b22] border border-[#f85149] text-[#f85149] text-sm px-3 py-1 rounded-full">
            #followforfollow
            <span className="ml-2 text-xs font-semibold">⚠ Banned</span>
          </span>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited hashtag checks",
              "Shadowban detection & alerts",
              "Reach & engagement analysis",
              "Hashtag history & saved lists",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What is a shadowban?</h3>
            <p className="text-[#8b949e] text-sm">A shadowban is when Instagram silently restricts your hashtags so your posts don't appear in hashtag feeds — reducing your reach without any notification.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the checker work?</h3>
            <p className="text-[#8b949e] text-sm">We analyze hashtag visibility and post reach metrics via the Instagram API to determine if a tag is restricted, banned, or safe to use in your content.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription?</h3>
            <p className="text-[#8b949e] text-sm">Yes — cancel anytime from your account dashboard. You'll retain access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Hashtag Ban Checker. All rights reserved.
      </footer>
    </main>
  );
}
