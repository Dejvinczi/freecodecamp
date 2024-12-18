1. What is a React component?

   React component is a function thath return piece of DOM structure.

2. What's wrong with this code?

```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

    Component name should have PascalCase -> MyComponent().

3. What's wrong with this code?

```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())

    Rendering React component is used with <Header /> syntax - not like a normal function call.

```
