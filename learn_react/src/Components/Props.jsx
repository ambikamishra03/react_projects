// To pass props, add them to the JSX, just like you would with HTML attributes.
// To read props, use the function Avatar({ person, size }) destructuring syntax.
// You can specify a default value like size = 100, which is used for missing and undefined props.
// You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
// Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
// Props are read-only snapshots in time: every render receives a new version of props.
// You can’t change props. When you need interactivity, you’ll need to set state.