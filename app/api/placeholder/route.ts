import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const width = searchParams.get("width") || "300";
  const height = searchParams.get("height") || "300";

  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#333333"/>
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">
        ${width}x${height}
      </text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}
