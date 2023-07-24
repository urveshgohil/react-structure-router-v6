//To concate the path for the public folder
const toAbsoluteURL = (pathname) => { return (process.env.PUBLIC_URL + pathname) };

const ScrollToTop = () => {
    return (
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        })
    )
};

export { toAbsoluteURL, ScrollToTop }