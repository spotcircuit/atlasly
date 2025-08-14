import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Star, 
  ThumbsUp, 
  MessageSquare, 
  TrendingUp,
  CheckCircle,
  Filter,
  Search,
  Calendar,
  User,
  MoreVertical,
  Flag,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCurrentVertical } from "@/config/verticals";

const vertical = getCurrentVertical();

export const metadata: Metadata = {
  title: "MedSpa Reviews | Real Patient Experiences & Ratings",
  description: "Read authentic reviews and ratings from real MedSpa patients. Find trusted aesthetic providers based on verified patient experiences and treatment results.",
  keywords: "medspa reviews, patient reviews, aesthetic clinic ratings, treatment reviews, verified reviews, patient testimonials",
  openGraph: {
    title: "MedSpa Reviews - Real Patient Experiences",
    description: "Discover what patients are saying about MedSpas and aesthetic treatments in your area.",
    type: "website",
  },
};

// Mock data - would come from database
const featuredReviews = [
  {
    id: "1",
    author: "Sarah M.",
    avatar: "SM",
    rating: 5,
    date: "2 weeks ago",
    medspa: "Elite Aesthetics New York",
    medspaSlug: "elite-aesthetics-ny",
    treatment: "Botox",
    title: "Amazing results, highly recommend!",
    content: "I had my first Botox treatment here and couldn't be happier with the results. The staff was incredibly professional and made me feel comfortable throughout the entire process. Dr. Chen took the time to explain everything and the results look so natural. My crow's feet are completely gone!",
    helpful: 42,
    verified: true,
    images: ["https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=300&fit=crop"]
  },
  {
    id: "2",
    author: "Jessica L.",
    avatar: "JL",
    rating: 5,
    date: "1 month ago",
    medspa: "Beverly Hills MedSpa",
    medspaSlug: "beverly-hills-medspa",
    treatment: "Dermal Fillers",
    title: "Life-changing experience",
    content: "After researching for months, I finally chose this MedSpa for lip fillers and I'm so glad I did. The consultation was thorough, they listened to exactly what I wanted, and the results are perfect - natural but noticeable. The follow-up care has been exceptional too.",
    helpful: 38,
    verified: true
  },
  {
    id: "3",
    author: "Michael R.",
    avatar: "MR",
    rating: 4,
    date: "3 weeks ago",
    medspa: "Miami Beach MedSpa",
    medspaSlug: "miami-beach-medspa",
    treatment: "Laser Hair Removal",
    title: "Great results, minor wait time",
    content: "I've had 3 sessions of laser hair removal so far and the results are fantastic. The only reason I'm not giving 5 stars is because there was a 30-minute wait during my last visit. Otherwise, the staff is professional and the treatment is effective.",
    helpful: 27,
    verified: true
  }
];

const recentReviews = [
  {
    id: "4",
    author: "Amanda K.",
    rating: 5,
    date: "3 days ago",
    medspa: "Chicago Aesthetic Institute",
    treatment: "HydraFacial",
    content: "Best facial I've ever had! My skin is glowing.",
    helpful: 12,
    verified: true
  },
  {
    id: "5",
    author: "David P.",
    rating: 4,
    date: "1 week ago",
    medspa: "Manhattan Medical Spa",
    treatment: "CoolSculpting",
    content: "Seeing great results after 2 months. Very happy with the process.",
    helpful: 8,
    verified: false
  },
  {
    id: "6",
    author: "Lisa T.",
    rating: 5,
    date: "5 days ago",
    medspa: "Tribeca Wellness & Beauty",
    treatment: "Microneedling",
    content: "Professional staff and amazing results for acne scars.",
    helpful: 15,
    verified: true
  }
];

const stats = {
  totalReviews: "50,000+",
  verifiedReviews: "92%",
  averageRating: "4.6",
  monthlyReviews: "2,500+"
};

export default function ReviewsPage() {
  const heroStyle = vertical.branding?.gradients?.primary
    ? { background: vertical.branding.gradients.primary }
    : {};

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20" style={heroStyle}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-white/20 text-white">
              <Award className="mr-1 h-3 w-3" />
              Verified Patient Reviews
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Real MedSpa Reviews from Real Patients
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Read authentic experiences from thousands of patients. 
              Make informed decisions about your aesthetic treatments.
            </p>
            
            {/* Search Bar */}
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-400" />
                  <Input
                    type="text"
                    placeholder="Search reviews by MedSpa or treatment..."
                    className="h-12 border-white/30 bg-white/90 pl-10 backdrop-blur-sm focus:bg-white focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <Button className="h-12 bg-white text-purple-600 hover:bg-white/90">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y bg-gradient-to-br from-purple-50 to-pink-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-purple-600">{stats.totalReviews}</div>
              <div className="mt-1 text-sm text-gray-600">Total Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{stats.verifiedReviews}</div>
              <div className="mt-1 text-sm text-gray-600">Verified Reviews</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-3xl font-bold text-purple-600">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                {stats.averageRating}
              </div>
              <div className="mt-1 text-sm text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{stats.monthlyReviews}</div>
              <div className="mt-1 text-sm text-gray-600">New Reviews Monthly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Rating Filter */}
                  <div>
                    <label className="text-sm font-medium">Rating</label>
                    <div className="mt-2 space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <label key={rating} className="flex items-center gap-2">
                          <input type="checkbox" className="text-purple-600" />
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, idx) => (
                              <Star
                                key={idx}
                                className={`h-4 w-4 ${
                                  idx < rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">& up</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Treatment Filter */}
                  <div>
                    <label className="text-sm font-medium">Treatment</label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="All treatments" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Treatments</SelectItem>
                        <SelectItem value="botox">Botox</SelectItem>
                        <SelectItem value="fillers">Dermal Fillers</SelectItem>
                        <SelectItem value="laser">Laser Treatments</SelectItem>
                        <SelectItem value="facial">Facials</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Verified Only */}
                  <div>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="text-purple-600" defaultChecked />
                      <span className="text-sm font-medium">Verified Reviews Only</span>
                    </label>
                  </div>

                  {/* Time Period */}
                  <div>
                    <label className="text-sm font-medium">Time Period</label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="All time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Time</SelectItem>
                        <SelectItem value="week">Past Week</SelectItem>
                        <SelectItem value="month">Past Month</SelectItem>
                        <SelectItem value="3months">Past 3 Months</SelectItem>
                        <SelectItem value="year">Past Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="outline" className="w-full">
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>

              {/* Write Review CTA */}
              <Card className="mt-6">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="mx-auto mb-3 h-10 w-10 text-purple-600" />
                  <h3 className="mb-2 font-semibold">Share Your Experience</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Help others make informed decisions
                  </p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Write a Review
                  </Button>
                </CardContent>
              </Card>
            </aside>

            {/* Reviews Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="featured" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="recent">Most Recent</TabsTrigger>
                  <TabsTrigger value="helpful">Most Helpful</TabsTrigger>
                </TabsList>

                <TabsContent value="featured" className="mt-6 space-y-6">
                  {featuredReviews.map((review) => (
                    <Card key={review.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <Avatar>
                              <AvatarFallback>{review.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-semibold">{review.author}</p>
                                {review.verified && (
                                  <Badge variant="secondary" className="text-xs">
                                    <CheckCircle className="mr-1 h-3 w-3" />
                                    Verified
                                  </Badge>
                                )}
                              </div>
                              <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                                <div className="flex">
                                  {[...Array(5)].map((_, idx) => (
                                    <Star
                                      key={idx}
                                      className={`h-4 w-4 ${
                                        idx < review.rating
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span>•</span>
                                <span>{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <Button size="icon" variant="ghost">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-3">
                          <Link
                            href={`/listing/${review.medspaSlug}`}
                            className="font-semibold text-purple-600 hover:underline"
                          >
                            {review.medspa}
                          </Link>
                          <span className="mx-2">•</span>
                          <span className="text-gray-600">{review.treatment}</span>
                        </div>
                        
                        {review.title && (
                          <h3 className="mb-2 font-semibold">{review.title}</h3>
                        )}
                        
                        <p className="text-gray-600">{review.content}</p>
                        
                        {review.images && (
                          <div className="mt-4 flex gap-2">
                            {review.images.map((img, idx) => (
                              <div key={idx} className="relative h-20 w-20 overflow-hidden rounded">
                                <Image
                                  src={img}
                                  alt={`Review image ${idx + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="mt-4 flex items-center gap-4">
                          <Button variant="outline" size="sm">
                            <ThumbsUp className="mr-1 h-3 w-3" />
                            Helpful ({review.helpful})
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Flag className="mr-1 h-3 w-3" />
                            Report
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="recent" className="mt-6 space-y-6">
                  {recentReviews.map((review) => (
                    <Card key={review.id}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <p className="font-semibold">{review.author}</p>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                <CheckCircle className="mr-1 h-3 w-3" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, idx) => (
                              <Star
                                key={idx}
                                className={`h-4 w-4 ${
                                  idx < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">
                            for {review.treatment} at {review.medspa}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{review.content}</p>
                        <div className="mt-4">
                          <Button variant="outline" size="sm">
                            <ThumbsUp className="mr-1 h-3 w-3" />
                            Helpful ({review.helpful})
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="helpful" className="mt-6">
                  <p className="text-center text-gray-500">
                    Most helpful reviews coming soon...
                  </p>
                </TabsContent>
              </Tabs>

              {/* Pagination */}
              <div className="mt-8 flex justify-center gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="outline" className="bg-purple-600 text-white hover:bg-purple-700">
                  1
                </Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Write Review Section */}
      <section className="border-t bg-gradient-to-br from-purple-50 to-pink-50 py-12">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Write Your Review</CardTitle>
              <CardDescription>
                Share your MedSpa experience to help others
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">MedSpa Name</label>
                  <Input placeholder="Search for your MedSpa..." />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Treatment Received</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select treatment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="botox">Botox</SelectItem>
                      <SelectItem value="fillers">Dermal Fillers</SelectItem>
                      <SelectItem value="laser">Laser Treatment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Button key={star} size="icon" variant="ghost">
                        <Star className="h-6 w-6 text-gray-300 hover:fill-yellow-400 hover:text-yellow-400" />
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Review Title</label>
                  <Input placeholder="Summarize your experience" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Review</label>
                  <Textarea
                    placeholder="Tell us about your experience..."
                    className="min-h-[150px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}