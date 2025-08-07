const TypewriterHeading = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <h2 className={`${styles.sectionHeadText} font-mono text-white`}>
      <span className="border-r-2 border-white animate-pulse pr-1">
        {displayedText}
        {index < text.length ? "*" : ""}
      </span>
    </h2>
  );
};
