export default function LoadingPage() {
    return (
      <div className="flex items-center justify-center h-auto bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
            Loading, please wait...
          </p>
        </div>
      </div>
    );
  }
  