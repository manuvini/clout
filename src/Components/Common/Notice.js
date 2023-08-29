const Notice = () => {
    return (
      <div className="bg-lime-200 text-gray-500 py-2 px-4 flex justify-between items-center">
        <div>
          <a href="mailto:ehikka@gmail.com" className="mr-4">
            ehikka@gmail.com
          </a>
          <span className="mr-4">|</span>
          <a href="tel:+919035076663" className="mr-4">
            +91 9035076663
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <svg
              className="h-6 w-6 fill-current text-white hover:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12.009c0-5.524-4.476-10-10-10s-10 4.476-10 10c0 4.937 3.61 9.007 8.317 9.816v-7.005h-2.497v-2.941h2.497v-2.198c0-2.467 1.464-3.827 3.721-3.827 1.071 0 1.988.079 2.254.114v2.588h-1.545c-1.212 0-1.449.576-1.449 1.423v1.862h2.896l-.379 2.941h-2.517v7.056c4.707-.809 8.308-4.879 8.308-9.816z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <svg
              className="h-6 w-6 fill-current text-white hover:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 16 16"
            >
              <path fill="#fff" d="..." /> {/* Facebook path */}
            </svg>
          </a>
          <a href="/booknow" className="px-4 py-2 bg-orange-500 rounded-lg">
            Book Now
          </a>
        </div>
      </div>
    );
  };
  
  export default Notice;
  