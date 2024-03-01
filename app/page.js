/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tMcqUdBtaV6
 * Documentation: https://v0.deyv/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
export default function Component() {
  return (
    <div className="grid min-h-screen bg-gray-100 grid-rows-[auto_1fr_auto] dark:bg-gray-900">
      <header className="bg-white shadow">
        <div className="px-4 py-6 md:px-6 lg:px-8 lg:py-8">
          <div className="flex items-center space-x-4">
            <Link className="flex space-x-2 font-bold" href="#">
              <HomeIcon className="w-6 h-6" />
              <span>Home</span>
            </Link>
            <nav className="ml-auto space-x-4 flex">
              <Link
                className="text-sm font-medium tracking-wide border-b-2 border-transparent dark:text-gray-400 dark:group-hover:text-gray-300 dark:active:text-gray-300 dark:visited:text-gray-300 dark:hover:text-gray-200"
                href="#"
              >
                About
              </Link>
              <Link
                className="text-sm font-medium tracking-wide border-b-2 border-indigo-500 dark:text-gray-400 dark:group-hover:text-gray-300 dark:active:text-gray-300 dark:visited:text-gray-300 dark:hover:text-gray-200"
                href="#"
              >
                Papers
              </Link>
              <Link
                className="text-sm font-medium tracking-wide border-b-2 border-transparent dark:text-gray-400 dark:group-hover:text-gray-300 dark:active:text-gray-300 dark:visited:text-gray-300 dark:hover:text-gray-200"
                href="#"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {/* <main className="flex items-center py-10 lg:py-16">
        <div className="container prose prose-gray mx-auto dark:prose-invert">
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
              Taxing Laughter: The Joke Tax Chronicles
            </h1>
            <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
          </div>
          <p>
            Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.
            One day, his advisors came to him with a problem: the kingdom was running out of money.
          </p>
          <p>
            Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
            under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem
            to stop Jokester.
          </p>
          <p>
            And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that
            they couldn't help but laugh. And once they started laughing, they couldn't stop.
          </p>
          <p>
            The king thought long and hard, and finally came up with
            <a href="#">a brilliant plan</a>: he would tax the jokes in the kingdom.
          </p>
          <blockquote>
            “After all,” he said, “everyone enjoys a good joke, so it's only fair that they should pay for the
            privilege.”
          </blockquote>
          <h3>The Joke Tax</h3>
          <p>The king's subjects were not amused. They grumbled and complained, but the king was firm:</p>
          <ul>
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
          <p>
            As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who
            refused to let the king's foolishness get him down: a court jester named Jokester.
          </p>
        </div>
      </main>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container px-4 py-6 prose prose-sm mx-auto text-gray-500 dark:prose-invert dark:text-gray-400">
          <div className="space-y-2 not-prose">
            <h2 className="text-2xl font-extrabold tracking-tight lg:text-3xl">Leave a Reply</h2>
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
              <Input id="email" placeholder="Enter your email" required type="email" />
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
      </div> */}
      <section className="bg-gray-200 dark:bg-gray-800 py-10 lg:py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Download Research Papers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold">Paper 1</h3>
              <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button className="mt-4" variant="outline">
                Download
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold">Paper 2</h3>
              <p className="text-gray-500">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Button className="mt-4" variant="outline">
                Download
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold">Paper 3</h3>
              <p className="text-gray-500">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <Button className="mt-4" variant="outline">
                Download
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
