
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type SDGCardProps = {
  id: number;
  title: string;
  color: string;
  description: string;
  link: string;
};

const SDGCard = ({ id, title, color, description, link }: SDGCardProps) => {
  return (
    <Link to={link}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4" style={{ borderTopColor: color }}>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3" style={{ backgroundColor: color }}>
              {id}
            </span>
            <span className="text-lg">{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 line-clamp-3">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SDGCard;
