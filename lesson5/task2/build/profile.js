(() => { "use strict";
    (async function(t) { const o = await fetch("https://api.github.com/users/github"); if (!o.ok) throw new Error("Failed to get user data"); return await o.json() })().then((({ name: t, location: o }) => (t => { const { name: o, location: n } = t;
        console.log(`${o} from ${n}`) })({ name: t, location: o }))) })();