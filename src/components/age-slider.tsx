"use client"

import { Slider } from "@/components/ui/slider"

interface AgeSliderProps {
  currentAge: number
  setCurrentAge: (age: number) => void
}

export default function AgeSlider({ currentAge, setCurrentAge }: AgeSliderProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-5xl font-bold">{currentAge}</span>
      </div>
      <Slider min={10} max={100} step={1} value={[currentAge]} onValueChange={(value) => setCurrentAge(value[0])} />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>10</span>
        <span>55</span>
        <span>100</span>
      </div>
    </div>
  )
}

