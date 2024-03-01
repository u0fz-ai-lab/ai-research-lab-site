import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="grid min-h-screen bg-gray-100 grid-rows-[auto_1fr_auto] dark:bg-gray-900">
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container px-4 py-6 prose prose-sm mx-auto text-gray-500 dark:prose-invert dark:text-gray-400">
          <div className="space-y-2 not-prose">
            <h2 className="text-2xl font-extrabold tracking-tight lg:text-3xl">
              Contact Us Today
            </h2>
            <p>Your email address will not be published.</p>
          </div>
          <form className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block" htmlFor="name">
                Name
              </label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <label className="block" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                placeholder="Enter your email"
                required
                type="email"
              />
            </div>
            <div className="space-y-2 md:col-start-2 md:row-start-1">
              <label className="block" htmlFor="message">
                Message
              </label>
              <Textarea
                className="min-h-[150px] max-h-[150px] resize-none"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <div className="col-start-1 md:col-start-2 flex flex-col">
              <Button size="sm" type="submit">
                Post Comment
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container px-4 py-6 prose prose-sm mx-auto text-gray-500 dark:prose-invert dark:text-gray-400">
          <div className="space-y-2 not-prose">
            <h2 className="text-2xl font-extrabold tracking-tight lg:text-3xl">
              Our Employees
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Employee Card */}
            <div className="space-y-2 flex items-center">
              <img
                className="w-16 h-16 rounded-full"
                src="employee_image_url"
                alt="Employee Name"
              />
              <div>
                <h3 className="font-bold">Employee Name</h3>
                <p>Contact Details</p>
              </div>
            </div>

            <div className="space-y-2 flex items-center">
              <img
                className="w-16 h-16 rounded-full"
                src="employee_image_url"
                alt="Employee Name"
              />
              <div>
                <h3 className="font-bold">Employee Name</h3>
                <p>Contact Details</p>
              </div>
            </div>

            <div className="space-y-2 flex items-center">
              <img
                className="w-16 h-16 rounded-full"
                src="employee_image_url"
                alt="Employee Name"
              />
              <div>
                <h3 className="font-bold">Employee Name</h3>
                <p>Contact Details</p>
              </div>
            </div>

            <div className="space-y-2 flex items-center">
              <img
                className="w-16 h-16 rounded-full"
                src="employee_image_url"
                alt="Employee Name"
              />
              <div>
                <h3 className="font-bold">Employee Name</h3>
                <p>Contact Details</p>
              </div>
            </div>
            {/* Add more employee cards as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
