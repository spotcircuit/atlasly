"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  Target,
  Calendar,
  DollarSign,
  MapPin,
  Mail,
  Phone,
  User,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

// Quiz configuration
const quizSteps = [
  {
    id: "goal",
    title: "What's your primary aesthetic goal?",
    subtitle: "Help us understand what you're looking to achieve",
    icon: Target,
    type: "single",
    options: [
      { 
        value: "anti-aging", 
        label: "Reduce signs of aging",
        description: "Wrinkles, fine lines, and age spots",
        treatments: ["botox", "fillers", "laser"]
      },
      { 
        value: "skin-quality", 
        label: "Improve skin texture & tone",
        description: "Acne scars, uneven texture, dullness",
        treatments: ["chemical-peels", "microneedling", "hydrafacial"]
      },
      { 
        value: "body-contouring", 
        label: "Body sculpting & contouring",
        description: "Fat reduction, muscle toning",
        treatments: ["coolsculpting", "emsculpt", "morpheus8"]
      },
      { 
        value: "enhancement", 
        label: "Facial enhancement",
        description: "Lip fillers, cheek augmentation",
        treatments: ["fillers", "sculptra", "prp"]
      },
      { 
        value: "maintenance", 
        label: "Preventative care",
        description: "Maintain youthful appearance",
        treatments: ["botox", "skincare", "laser"]
      }
    ]
  },
  {
    id: "areas",
    title: "Which areas concern you most?",
    subtitle: "Select all that apply",
    icon: Target,
    type: "multiple",
    options: [
      { value: "forehead", label: "Forehead lines", icon: "👤" },
      { value: "eyes", label: "Crow's feet / Under eyes", icon: "👁️" },
      { value: "cheeks", label: "Cheeks / Mid-face", icon: "😊" },
      { value: "lips", label: "Lips", icon: "👄" },
      { value: "jawline", label: "Jawline / Neck", icon: "🦴" },
      { value: "body", label: "Body areas", icon: "💪" }
    ]
  },
  {
    id: "timeline",
    title: "When are you looking to start treatment?",
    subtitle: "This helps us connect you with available providers",
    icon: Calendar,
    type: "single",
    options: [
      { value: "asap", label: "As soon as possible", urgency: "high" },
      { value: "1-2weeks", label: "Within 1-2 weeks", urgency: "medium" },
      { value: "month", label: "Within a month", urgency: "medium" },
      { value: "research", label: "Just researching", urgency: "low" },
      { value: "event", label: "For a specific event", urgency: "high" }
    ]
  },
  {
    id: "budget",
    title: "What's your treatment budget?",
    subtitle: "This helps us recommend appropriate treatments",
    icon: DollarSign,
    type: "single",
    options: [
      { value: "under-500", label: "Under $500", range: "$200-500" },
      { value: "500-1000", label: "$500 - $1,000", range: "$500-1000" },
      { value: "1000-2500", label: "$1,000 - $2,500", range: "$1000-2500" },
      { value: "2500-5000", label: "$2,500 - $5,000", range: "$2500-5000" },
      { value: "5000+", label: "$5,000+", range: "$5000+" },
      { value: "flexible", label: "I'm flexible", range: "Flexible" }
    ]
  },
  {
    id: "location",
    title: "Where are you located?",
    subtitle: "We'll find the best MedSpas near you",
    icon: MapPin,
    type: "input",
    fields: [
      { name: "city", label: "City", type: "text", placeholder: "New York", required: false },
      { name: "state", label: "State", type: "text", placeholder: "NY", required: false },
      { name: "zip", label: "ZIP Code", type: "text", placeholder: "10001", required: false }
    ]
  },
  {
    id: "contact",
    title: "Get Your Personalized Treatment Plan",
    subtitle: "We'll send you customized recommendations and exclusive offers",
    icon: Mail,
    type: "contact",
    leadMagnet: "Free Treatment Guide ($97 Value)",
    fields: [
      { name: "name", label: "Full Name", type: "text", placeholder: "Jane Smith", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "jane@example.com", required: true },
      { name: "phone", label: "Phone (for appointment scheduling)", type: "tel", placeholder: "(555) 123-4567", required: true }
    ]
  }
];

export default function QuizPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentStep + 1) / quizSteps.length) * 100;
  const currentQuestion = quizSteps[currentStep];

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      // Save current answers
      if (currentQuestion.type === "multiple") {
        setAnswers({ ...answers, [currentQuestion.id]: selectedOptions });
        setSelectedOptions([]);
      }
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSingleSelect = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleMultipleSelect = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter(v => v !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: {
        ...answers[currentQuestion.id],
        [field]: value
      }
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Here you would send the data to your API
    console.log("Quiz submission:", answers);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowResults(true);
    }, 2000);
  };

  const isStepComplete = () => {
    if (currentQuestion.type === "single") {
      return !!answers[currentQuestion.id];
    }
    if (currentQuestion.type === "multiple") {
      return selectedOptions.length > 0;
    }
    if (currentQuestion.type === "input" || currentQuestion.type === "contact") {
      const stepAnswers = answers[currentQuestion.id] || {};
      return currentQuestion.fields?.every(field => 
        !field.required || stepAnswers[field.name]
      );
    }
    return false;
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-2xl"
          >
            <Card className="border-purple-200 shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-3xl">Perfect! Your Personalized Plan is Ready</CardTitle>
                <CardDescription className="text-lg">
                  We've matched you with the best MedSpas and treatments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg bg-purple-50 p-6">
                  <h3 className="mb-3 font-semibold">Based on your answers, we recommend:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-purple-600" />
                      <span>Botox for forehead lines (Starting at $300)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-purple-600" />
                      <span>Dermal fillers for volume restoration ($600-800)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-purple-600" />
                      <span>HydraFacial for skin texture ($150-250)</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-purple-200 bg-white p-6">
                  <Badge className="mb-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <Sparkles className="mr-1 h-3 w-3" />
                    Top 3 Matched MedSpas
                  </Badge>
                  <div className="space-y-3">
                    {[
                      { name: "Elite Aesthetics NYC", rating: 4.9, reviews: 342, discount: "20% off first visit" },
                      { name: "Manhattan Medical Spa", rating: 4.8, reviews: 256, discount: "Free consultation" },
                      { name: "Tribeca Wellness", rating: 4.7, reviews: 189, discount: "$100 off package" }
                    ].map((spa, idx) => (
                      <div key={idx} className="flex items-center justify-between border-b pb-3 last:border-0">
                        <div>
                          <p className="font-semibold">{spa.name}</p>
                          <p className="text-sm text-gray-600">⭐ {spa.rating} ({spa.reviews} reviews)</p>
                        </div>
                        <Badge variant="outline" className="text-green-600">
                          {spa.discount}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <p className="mb-4 text-sm text-gray-600">
                    Check your email for your complete treatment guide and exclusive offers!
                  </p>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    onClick={() => router.push("/directory")}
                  >
                    Browse Matched MedSpas
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4">
        {/* Progress Bar */}
        <div className="mx-auto mb-8 max-w-2xl">
          <div className="mb-2 flex items-center justify-between text-sm text-gray-600">
            <span>Step {currentStep + 1} of {quizSteps.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Quiz Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-2xl"
          >
            <Card className="border-purple-200 shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-pink-100">
                  <currentQuestion.icon className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">{currentQuestion.title}</CardTitle>
                <CardDescription className="text-base">
                  {currentQuestion.subtitle}
                </CardDescription>
                {currentQuestion.leadMagnet && (
                  <Badge className="mx-auto mt-3 bg-green-100 text-green-700">
                    <Sparkles className="mr-1 h-3 w-3" />
                    {currentQuestion.leadMagnet}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Single Choice Questions */}
                {currentQuestion.type === "single" && currentQuestion.options && (
                  <RadioGroup
                    value={answers[currentQuestion.id]}
                    onValueChange={handleSingleSelect}
                  >
                    {currentQuestion.options.map((option) => (
                      <label
                        key={option.value}
                        className="flex cursor-pointer items-start space-x-3 rounded-lg border p-4 hover:bg-purple-50"
                      >
                        <RadioGroupItem value={option.value} />
                        <div className="flex-1">
                          <p className="font-medium">{option.label}</p>
                          {option.description && (
                            <p className="text-sm text-gray-600">{option.description}</p>
                          )}
                        </div>
                      </label>
                    ))}
                  </RadioGroup>
                )}

                {/* Multiple Choice Questions */}
                {currentQuestion.type === "multiple" && currentQuestion.options && (
                  <div className="space-y-3">
                    {currentQuestion.options.map((option) => (
                      <label
                        key={option.value}
                        className="flex cursor-pointer items-center space-x-3 rounded-lg border p-4 hover:bg-purple-50"
                      >
                        <input
                          type="checkbox"
                          checked={selectedOptions.includes(option.value)}
                          onChange={() => handleMultipleSelect(option.value)}
                          className="h-4 w-4 rounded border-purple-300 text-purple-600"
                        />
                        <span className="text-2xl">{option.icon}</span>
                        <span className="flex-1 font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                )}

                {/* Input Fields */}
                {(currentQuestion.type === "input" || currentQuestion.type === "contact") && 
                 currentQuestion.fields && (
                  <div className="space-y-4">
                    {currentQuestion.fields.map((field) => (
                      <div key={field.name}>
                        <Label htmlFor={field.name}>
                          {field.label}
                          {field.required && <span className="text-red-500"> *</span>}
                        </Label>
                        <Input
                          id={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={answers[currentQuestion.id]?.[field.name] || ""}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          className="mt-1"
                          required={field.required}
                        />
                      </div>
                    ))}
                    {currentQuestion.type === "contact" && (
                      <div className="rounded-lg bg-purple-50 p-4">
                        <p className="text-sm text-gray-600">
                          <strong>Privacy Promise:</strong> Your information is secure and will never be shared. 
                          You can unsubscribe at any time.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!isStepComplete() || isSubmitting}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  {isSubmitting ? (
                    "Processing..."
                  ) : currentStep === quizSteps.length - 1 ? (
                    "Get My Results"
                  ) : (
                    <>
                      Next
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Trust Badges */}
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>No Spam Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}