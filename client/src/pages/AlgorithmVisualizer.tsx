import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AlgorithmVisualizer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              عارض الخوارزميات التفاعلي
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Separator />
            <div className="w-full h-[80vh] overflow-hidden">
              <iframe
                src="/algorithm-visualizer/index.html"
                title="Algorithm Visualizer"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
