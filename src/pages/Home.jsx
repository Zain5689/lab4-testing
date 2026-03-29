import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <header className="flex justify-between items-center border-b pb-4 mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Customer Portal</h1>
        {/* استبدلنا الـ Button بـ Link مباشر واخد ستايل بوتون */}
        <Link
          to="/about"
          className="px-4 py-2 border rounded hover:bg-gray-100 transition"
        >
          Go to About
        </Link>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {loading ? (
          /* استبدلنا الـ Skeleton بنص Loading واضح للتست */
          <div className="col-span-full text-center py-10 text-xl font-medium text-gray-500">
            Loading...
          </div>
        ) : (
          users.map((user) => (
            <div
              key={user.id}
              className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-gray-800 truncate mb-2">
                {user.email}
              </h2>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500 uppercase">
                  User ID: {user.id}
                </span>
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                  {user.role || "Customer"}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {!loading && users.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No customers found.
        </div>
      )}
    </div>
  );
};

export default Home;
