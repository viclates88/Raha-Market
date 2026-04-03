export default function SkeletonLoader({ count = 4 }: { count?: number }) {
  return (
    <>
      {Array(count).fill(0).map((_, i) => (
        <div key={i} className="modern-card animate-pulse">
          <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-t-3xl"></div>
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
          </div>
        </div>
      ))}
    </>
  );
}