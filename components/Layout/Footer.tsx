const Footer = () => {
  return (
    <footer className="py-1 px-4 font-mono bg-white dark:bg-black text-indigo-700 dark:text-indigo-300 border-t dark:border-indigo-900">
      <div className="text-center">
        Domosedov <span>{new Date().getFullYear()}г.</span>
      </div>
    </footer>
  );
};

export default Footer;
