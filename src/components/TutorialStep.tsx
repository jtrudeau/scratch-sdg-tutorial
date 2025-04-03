
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TutorialStepProps = {
  number: number;
  title: string;
  children: React.ReactNode;
  imageSrc?: string;
};

const TutorialStep = ({ number, title, children, imageSrc }: TutorialStepProps) => {
  return (
    <Card className="mb-8 border-l-4 border-sdg-education">
      <CardHeader className="bg-gray-50">
        <CardTitle className="flex items-center text-xl">
          <span className="w-8 h-8 rounded-full bg-sdg-education text-white font-bold flex items-center justify-center mr-3">
            {number}
          </span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="prose max-w-none">
          {children}
        </div>
        {imageSrc && (
          <div className="mt-4">
            <img src={imageSrc} alt={`Tutorial step ${number}`} className="rounded-md border border-gray-200 shadow-sm" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Function to process text content and bold text in quotes
export const formatScratchText = (text: string) => {
  // This regex matches text inside quotation marks and wraps it in <strong> tags
  return text.replace(/"([^"]+)"/g, '<strong>"$1"</strong>');
};

// Scratch block component to display code blocks in Scratch style
export const ScratchBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#4C97FF] text-white p-3 rounded-lg my-3 font-mono shadow-md border-t-4 border-[#3373CC]">
      {children}
    </div>
  );
};

export default TutorialStep;
