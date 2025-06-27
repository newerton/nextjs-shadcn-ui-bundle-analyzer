import Link from "next/link";
import { Button } from "@/components/ui/button";

const dataSource = [
  {
    env: "Build",
    side: "nodejs (server)",
    link: "https://newerton.github.io/nextjs-shadcn-ui-bundle-analyzer/analyze/nodejs.html",
  },
  {
    env: "Build",
    side: "client (browser)",
    link: "https://newerton.github.io/nextjs-shadcn-ui-bundle-analyzer/analyze/client.html",
  },
];

export default function Home() {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Button variant="default">Button</Button>
      </div>

      <table border={1} cellPadding={6} cellSpacing={0}>
        <thead>
          <tr>
            <th>Environment</th>
            <th>Side</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((item, index) => (
            <tr key={index}>
              <td>{item.env}</td>
              <td>{item.side}</td>
              <td>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
