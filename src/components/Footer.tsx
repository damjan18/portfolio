export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-gray-400 dark:text-gray-600 text-center">
          © {new Date().getFullYear()} Damjan Pavlović
        </p>
      </div>
    </footer>
  );
}
