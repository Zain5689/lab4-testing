import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import axios from "axios";

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/users")
      .then((res) => res.data)
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-6 max-w-4xl space-y-8">
      {/* Header Section */}
      <header className="flex justify-between items-center border-b pb-4">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Customer Portal
        </h1>
        <Button asChild variant="outline">
          <Link to="/about">Go to About</Link>
        </Button>
      </header>

      {/* Main Content */}
      <div className="grid gap-4 sm:grid-cols-2">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="p-4">
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Skeleton className="h-3 w-1/2" />
                </CardContent>
              </Card>
            ))
          : users.map((user) => (
              <Card key={user.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg font-medium truncate">
                    {user.email}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    User ID: {user.id}
                  </span>
                  <Badge variant="secondary">{user.role || "Customer"}</Badge>
                </CardContent>
              </Card>
            ))}
      </div>

      {!loading && users.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No customers found.
        </div>
      )}
    </div>
  );
}
