
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MessageSquare } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface FreelancerCardProps {
  id: string;
  name: string;
  avatar: string;
  skills: string[];
  rating: number;
  mainSkill: string;
}

const FreelancerCard: React.FC<FreelancerCardProps> = ({
  id,
  name,
  avatar,
  skills,
  rating,
  mainSkill
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardContent className="pt-6 pb-3 flex flex-col items-center text-center">
        <Avatar className="h-20 w-20 mb-3">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <Link to={`/freelancers/${id}`}>
          <h3 className="font-semibold text-lg hover:text-qwikpal-teal transition-colors">
            {name}
          </h3>
        </Link>
        
        <Badge className="bg-qwikpal-blue mt-1 mb-2">{mainSkill}</Badge>
        
        <div className="flex flex-wrap justify-center gap-1 mt-2">
          {skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{skills.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-center mt-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({rating.toFixed(1)})</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 pb-4 flex items-center justify-between">
        <Button size="sm" className="bg-qwikpal-teal hover:bg-qwikpal-teal/90 w-full">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FreelancerCard;
