// TODO: Implement the site footer.
const Footer = () => {
  return (
    <footer className="border-t border-(--color-border) bg-(--color-surface)">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-(--color-text-secondary) sm:flex-row">
        <p>
          © {new Date().getFullYear()} Ahesanali Kadiwala. All rights reserved.
        </p>

        <p>Built with React & ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
