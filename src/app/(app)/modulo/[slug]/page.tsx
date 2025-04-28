import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Layout from '@/components/Layout';
import Link from 'next/link';

// Helper function to get module data
async function getModuleData(slug: string) {
  const moduleNumber = parseInt(slug, 10);
  if (isNaN(moduleNumber) || moduleNumber < 1 || moduleNumber > 15) {
    return null; // Invalid module number
  }

  const paddedSlug = slug.padStart(2, '0');
  const filePath = path.join('/home/ubuntu/curso_marketplace', `apostila_modulo_${paddedSlug}.md`);

  try {
    const content = await fs.promises.readFile(filePath, 'utf8');
    // Extract title (assuming first line is # Title)
    const titleMatch = content.match(/^#\s*(.*)/);
    const title = titleMatch ? titleMatch[1] : `Módulo ${paddedSlug}`;
    return { content, title, moduleNumber };
  } catch (error) {
    console.error(`Error reading module file ${filePath}:`, error);
    return null; // File not found or other error
  }
}

// Define params type
interface ModulePageProps {
  params: {
    slug: string;
  };
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { slug } = params;
  const moduleData = await getModuleData(slug);

  if (!moduleData) {
    notFound(); // Trigger 404 page if module data not found
  }

  const { content, title, moduleNumber } = moduleData;
  const prevModule = moduleNumber > 1 ? `/modulo/${String(moduleNumber - 1).padStart(2, '0')}` : null;
  const nextModule = moduleNumber < 15 ? `/modulo/${String(moduleNumber + 1).padStart(2, '0')}` : null;

  return (
    <Layout>
      <section className="section">
        <div className="container mx-auto px-6">
          <article className="prose lg:prose-xl max-w-none bg-white p-6 md:p-10 rounded-lg shadow-premium">
            <h1 className="text-primary-700 mb-8">{title}</h1>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            {prevModule ? (
              <Link href={prevModule} className="btn btn-primary">
                ← Módulo Anterior
              </Link>
            ) : (
              <div /> // Placeholder to keep alignment
            )}
            {nextModule ? (
              <Link href={nextModule} className="btn btn-primary">
                Próximo Módulo →
              </Link>
            ) : (
              <div /> // Placeholder to keep alignment
            )}
          </div>
          <div className="mt-8 text-center">
            <Link href="/estrutura-do-curso" className="text-primary-600 hover:underline">
              Voltar para Estrutura do Curso
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Optional: Generate static paths if needed (for SSG)
// export async function generateStaticParams() {
//   // Generate paths for modules 01 to 15
//   return Array.from({ length: 15 }, (_, i) => ({
//     slug: String(i + 1).padStart(2, '0'),
//   }));
// }

// Add basic prose styling adjustments in globals.css if needed
// Example for globals.css:
/*
@layer components {
  .prose {
    // Customize base prose styles if needed
    @apply text-gray-700;
  }
  .prose h1, .prose h2, .prose h3, .prose h4 {
    @apply font-heading text-gray-900;
  }
  .prose a {
    @apply text-primary-600 hover:text-primary-800;
  }
  .prose img {
     @apply rounded-md shadow-md my-6; // Style images within markdown
  }
  .prose code::before, .prose code::after {
      content: ""; // Remove backticks around inline code if desired
  }
  .prose code {
      @apply bg-gray-200 text-sm px-1 py-0.5 rounded;
  }
  .prose pre {
      @apply bg-gray-800 text-white p-4 rounded-md overflow-x-auto;
  }
}
*/

