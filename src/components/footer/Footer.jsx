// TODO: Implement the site footer.
const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Ahesanali Kadiwala. All rights reserved.
        </p>

        <p>Built with React & ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
