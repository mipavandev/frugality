import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

interface Job {
  id: string;
  title: string;
  description: string;
}

const JobListing = () => {
  const jobs: Job[] = [
    {
      id: "data-analyst",
      title: "Data Analyst",
      description: "Join our team to transform financial data into actionable insights. You'll work with cutting-edge analytics tools to help users make informed decisions."
    },
    {
      id: "frontend-developer",
      title: "Front-End Developer",
      description: "Build beautiful, responsive user interfaces that make financial management intuitive and delightful. Experience with React and modern web technologies required."
    },
    {
      id: "java-developer",
      title: "Java Developer",
      description: "Develop robust backend systems that power our financial platform. You'll work on scalable microservices and API integrations."
    },
    {
      id: "backend-developer",
      title: "Back-End Developer",
      description: "Create secure, high-performance server-side applications. Experience with databases, APIs, and cloud infrastructure is essential."
    },
    {
      id: "fullstack-developer",
      title: "Full Stack Developer",
      description: "Work across the entire technology stack to build end-to-end features. You'll bridge the gap between design and implementation."
    },
  ];

  const [formData, setFormData] = useState<{ [key: string]: { email: string; phone: string; coverLetter: string; resume: File | null } }>({});

  const handleSubmit = (e: React.FormEvent, jobId: string) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We'll be in touch soon.");
    setFormData(prev => ({
      ...prev,
      [jobId]: { email: "", phone: "", coverLetter: "", resume: null }
    }));
  };

  const handleChange = (jobId: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [jobId]: {
        ...prev[jobId],
        [field]: value
      }
    }));
  };

  const handleFileChange = (jobId: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      [jobId]: {
        ...prev[jobId],
        resume: file
      }
    }));
  };

  return (
    <Accordion type="single" collapsible className="space-y-4">
      {jobs.map((job) => (
        <AccordionItem key={job.id} value={job.id} className="bg-background border rounded-xl px-6">
          <AccordionTrigger className="text-left hover:no-underline py-6">
            <span className="text-xl font-semibold">{job.title}</span>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <p className="text-muted-foreground mb-6">{job.description}</p>
            
            <form onSubmit={(e) => handleSubmit(e, job.id)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`email-${job.id}`}>Email</Label>
                  <Input
                    id={`email-${job.id}`}
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData[job.id]?.email || ""}
                    onChange={(e) => handleChange(job.id, "email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor={`phone-${job.id}`}>Phone Number</Label>
                  <Input
                    id={`phone-${job.id}`}
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData[job.id]?.phone || ""}
                    onChange={(e) => handleChange(job.id, "phone", e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor={`cover-letter-${job.id}`}>Cover Letter</Label>
                <Textarea
                  id={`cover-letter-${job.id}`}
                  placeholder="Tell us why you're interested in this role..."
                  rows={4}
                  value={formData[job.id]?.coverLetter || ""}
                  onChange={(e) => handleChange(job.id, "coverLetter", e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor={`resume-${job.id}`}>Resume (PDF, DOC, or DOCX)</Label>
                <Input
                  id={`resume-${job.id}`}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(job.id, e.target.files?.[0] || null)}
                  required
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Apply Now
              </Button>
            </form>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default JobListing;
