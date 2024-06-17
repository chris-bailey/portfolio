'use client';

export default function BackToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
        >
            Back to Top
        </button>
    );
}
