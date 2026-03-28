export const posts = [
  {
    id: 'why-i-chose-cs',
    title: 'Why I Chose Computer Science',
    subtitle: 'A candid look at the moment curiosity became a career path.',
    date: 'March 15, 2025',
    readTime: '4 min read',
    tag: 'Personal',
    tagColor: '#6ecac8',
    excerpt:
      'Everyone has a story about the moment they knew. Mine happened at 2 AM with a broken Python script and no Stack Overflow answer in sight.',
    content: `Everyone has a story about the moment they knew. Mine happened at 2 AM with a broken Python script and no Stack Overflow answer in sight.

I'd been trying to automate something trivial — renaming a folder of photos by date. The script kept crashing with an index error I couldn't understand. But instead of quitting, I stayed. I don't know why. Maybe stubbornness. Maybe something deeper.

When it finally worked, the feeling wasn't relief. It was hunger. I wanted the next problem immediately.

**The honest answer**

I didn't choose CS because of job prospects or salary charts, though I won't pretend those don't matter. I chose it because it's the closest thing I've found to building something from nothing. A blank file can become a game, a tool, a piece of infrastructure that thousands of people rely on. That's remarkable when you slow down and think about it.

There's also something I appreciate about the culture of CS: the answers are almost always out there. The problem is always in your reasoning, not in some arbitrary rule someone made up. You can always get better through effort and clarity of thought.

**What surprised me**

I expected to love algorithms. I did not expect to love debugging. But debugging is where the real thinking happens. It's where you find out what you actually understood versus what you thought you understood.

I also didn't expect how collaborative it would be. The open-source culture, the willingness of strangers on the internet to explain complex ideas carefully — it's one of the more generous communities I've encountered.

**Where I am now**

Still learning. Probably always will be. But I've stopped waiting to feel "ready" before building things. The 2 AM script was bad code. It worked anyway. That's enough to start.`,
  },
  {
    id: 'cs50x-review',
    title: 'CS50x: What Nobody Tells You',
    subtitle: 'Harvard\'s free intro course is extraordinary. Here\'s the full picture.',
    date: 'February 28, 2025',
    readTime: '6 min read',
    tag: 'Learning',
    tagColor: '#c8a96e',
    excerpt:
      'CS50x will genuinely change how you think. It will also genuinely humble you. Both things are features, not bugs.',
    content: `CS50x will genuinely change how you think. It will also genuinely humble you. Both things are features, not bugs.

I started CS50x knowing a little Python. I ended it knowing C, SQL, JavaScript, Flask — and more importantly, knowing *how to learn* low-level concepts I'd never touched before.

**What makes it exceptional**

David Malan is a once-in-a-generation lecturer. Every concept is introduced through concrete, visual metaphors before the abstraction arrives. The phonebook example for binary search. The locker example for memory. These aren't just helpful — they're unforgettable.

The problem sets are genuinely hard. Speller (Week 5) nearly broke me. You're implementing a hash table in C and your code has to be fast enough to beat a staff benchmark. There's no hand-holding. The spec tells you what to build, not how. That's the point.

**What nobody tells you**

The course takes longer than advertised. "20 hours" is optimistic for anyone who actually wrestles with the material instead of copying solutions. Budget 40–60 hours if you want real understanding.

Also: Week 4 (memory, pointers, malloc) is the wall. It's where most people quit. If you can get through it — really get through it, not just copy working code — you'll have built something durable in your understanding of how computers actually work.

**Should you do it?**

Yes. Unequivocally. It's free, it's rigorous, and it treats you like an adult capable of struggling productively. That's rare in educational content.

Just don't rush it. Let the hard parts be hard. That's where the learning lives.`,
  },
  {
    id: 'react-vs-vanilla',
    title: 'React vs Vanilla JS: What I Actually Learned',
    subtitle: 'Six months in, I finally understand what the framework is actually solving.',
    date: 'February 10, 2025',
    readTime: '5 min read',
    tag: 'Web Dev',
    tagColor: '#a78bdb',
    excerpt: 'I spent three months fighting React before I understood it. Here\'s what clicked, and why it took that long.',
    content: `I spent three months fighting React before I understood it. Here's what clicked, and why it took that long.

When I first tried React coming from vanilla JS, it felt like someone had added complexity for no reason. JSX looked wrong. The component model felt arbitrary. Why couldn't I just select a DOM element and change its text?

**The moment it clicked**

I was building a simple todo app in vanilla JS. It worked fine until I needed the count in the header to update when I added an item. And the filter buttons to update. And the empty state to toggle. Suddenly I had fifteen functions all touching the same piece of state, all needing to know about each other.

React doesn't add complexity. It makes the complexity you already have *explicit and manageable*.

The component model is just a formal way of saying: "this piece of UI owns this piece of state, and here's what it looks like for every possible value of that state." Once I understood that, everything else followed.

**What vanilla JS taught me that React can't**

DOM manipulation, event bubbling, the actual browser APIs that frameworks sit on top of. This matters enormously when something breaks. A developer who only knows React is at the mercy of React's abstractions. Understanding what's underneath makes you dangerous in a good way.

**My honest recommendation**

Build something real in vanilla JS first. A todo app, a weather widget, something with real state management pain. Feel the problem. Then pick up React and notice how it solves exactly that problem.

The framework will make sense immediately, and you'll use it with genuine understanding rather than cargo-culting patterns you found on YouTube.`,
  },
  {
    id: 'dsa-grind',
    title: 'The DSA Grind: Month One',
    subtitle: 'Data structures, algorithms, and the slow art of not giving up.',
    date: 'January 20, 2025',
    readTime: '5 min read',
    tag: 'Algorithms',
    tagColor: '#c8392b',
    excerpt:
      'I started solving DSA problems expecting to feel smart. I felt confused instead. That turned out to be the right feeling.',
    content: `I started solving DSA problems expecting to feel smart. I felt confused instead. That turned out to be the right feeling.

Month one of serious DSA practice is an exercise in ego management. Problems that look simple destroy you. You spend 45 minutes on something tagged "Easy" and wonder if you're cut out for this. You are. Everyone feels this way.

**What I worked on**

Arrays, strings, and the two-pointer technique. Hash maps. Recursion basics. Sliding window. These are the fundamentals that appear, in disguise, in almost every other problem you'll encounter.

I solved ~40 problems in the first month, which sounds like a lot until you realize many took me two or three attempts with the solution half-visible.

**The method that actually worked**

Spend 25 minutes genuinely stuck before looking at hints. Not 5 minutes. Not 10. 25. This forces your brain to actually engage with the problem space, even if it doesn't solve it. When you do look at the solution, you understand *why* it works because you've already mapped the terrain.

Reading a solution after 5 minutes of half-effort teaches you nothing. You'll see the same pattern next week and be just as lost.

**The part nobody wants to hear**

Consistency beats intensity. 45 minutes every day outperforms 5-hour Saturday sessions dramatically. Your brain consolidates learning during sleep. You need repetition spread over time, not crammed into a weekend.

I missed days. I had weeks where I solved nothing. That's normal. The goal is to keep the streak long in aggregate, not perfect in sequence.`,
  },
  {
    id: 'git-for-beginners',
    title: 'Git Finally Makes Sense',
    subtitle: 'The mental model that turned Git from scary to obvious.',
    date: 'January 5, 2025',
    readTime: '4 min read',
    tag: 'Tools',
    tagColor: '#4caf7d',
    excerpt:
      'Stop memorizing Git commands. Start understanding what Git is actually tracking, and the commands become obvious.',
    content: `Stop memorizing Git commands. Start understanding what Git is actually tracking, and the commands become obvious.

Most Git tutorials teach you commands. Commit. Push. Pull. Branch. Merge. They don't explain the underlying model, which means every slightly unusual situation — a detached HEAD, a merge conflict, a rebase gone wrong — becomes panic-inducing.

**The mental model**

Git is a graph of snapshots. Each commit is a complete snapshot of your project at a point in time, plus a pointer to its parent commit. A branch is just a named pointer to a commit. HEAD is just a pointer to the branch you're currently on.

That's it. Every Git command is just an operation on this graph.

\`git checkout\` moves HEAD. \`git merge\` creates a new commit with two parents. \`git rebase\` replays commits on top of a different base. Once you can visualize the graph, commands stop being magic incantations.

**The commands worth knowing cold**

- \`git status\` — always run this before anything else
- \`git log --oneline --graph\` — see the actual snapshot graph
- \`git diff\` — what changed, specifically
- \`git stash\` — temporary shelf for unfinished work
- \`git reset --soft HEAD~1\` — undo the last commit but keep your changes

**On merge conflicts**

Conflicts happen when two branches changed the same lines differently. Git can't decide which version is correct — that's a human judgment. The conflict markers show you both versions. You pick (or combine them). Then you commit. It's not complicated; it just looks scary until you've done it five times.

Learn Git from the inside out. The commands will follow naturally.`,
  },
  {
    id: 'building-in-public',
    title: 'Why I Started Building in Public',
    subtitle: 'Accountability, learning, and the unexpected benefit of writing things down.',
    date: 'December 15, 2024',
    readTime: '3 min read',
    tag: 'Personal',
    tagColor: '#6ecac8',
    excerpt:
      'Writing about what you\'re building forces a clarity that thinking alone never achieves. That\'s the main reason. Everything else is a bonus.',
    content: `Writing about what you're building forces a clarity that thinking alone never achieves. That's the main reason. Everything else is a bonus.

I resisted building in public for a long time. I felt like I didn't know enough yet. That I'd look foolish. That I should wait until I had something impressive to show.

This is exactly backwards. The early stages — the confusion, the wrong turns, the small wins — are the most useful things to document. Not for others necessarily, but for yourself.

**What writing forces**

When you write about what you learned, you immediately discover what you don't actually understand. Vague intuitions collapse under the pressure of prose. "I kind of get recursion" doesn't survive being written down. Either you can explain it or you can't.

This is uncomfortable. It's also the fastest way to find the gaps in your knowledge and fill them.

**The unexpected benefits**

A record of your progress is genuinely motivating during hard stretches. Looking back at something you wrote three months ago and finding it basic is evidence of growth. You need that evidence when the current problem feels impossibly hard.

There's also a compounding effect on thinking. Writing regularly trains you to notice what's interesting and worth articulating. You start learning differently — with an eye toward what's worth explaining.

**Starting**

You don't need a blog. You don't need a newsletter. A simple notes folder is enough. Write one paragraph about what you built or learned today. Do it consistently. The clarity will follow.`,
  },
]