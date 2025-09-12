"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="container mx-auto py-12 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">TruthNet</h1>
        <p className="text-xl text-muted-foreground">Empower activists, whistleblowers, and truth-seekers with secure tools to expose hidden powers and demand accountability.</p>
        <img 
          src="https://placehold.co/1200x600?text=Secure+global+network+of+activists+uniting+against+hidden+powers+in+a+dramatic+dark-themed+illustration+with+encrypted+data+streams+and+resistance+symbols" 
          alt="Secure global network of activists uniting against hidden powers in a dramatic dark-themed illustration with encrypted data streams and resistance symbols" 
          className="mx-auto rounded-lg shadow-xl"
          onError={(e) => { e.currentTarget.src = "/fallback-hero.png"; }} // Graceful fallback
        />
        <Button size="lg" asChild>
          <a href="/auth">Join the Resistance</a>
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Secure Communication</CardTitle>
          </CardHeader>
          <CardContent>End-to-end encrypted messaging and file sharing for protected collaboration.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Verified Intelligence</CardTitle>
          </CardHeader>
          <CardContent>Central hub for vetted exposés and interactive power structure maps.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rapid Response</CardTitle>
          </CardHeader>
          <CardContent>Tools to counter disinformation and coordinate global actions.</CardContent>
        </Card>
      </section>
    </div>
  );
}