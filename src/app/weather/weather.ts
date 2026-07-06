import { Component, OnInit, signal, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { WeatherService } from '../weather.service';

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './weather.html',
  styleUrl: './weather.css'
})
export class WeatherComponent implements OnInit {
  private weatherService = inject(WeatherService);

  forecasts = signal<WeatherForecast[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadWeather();
  }

  loadWeather(): void {
    this.loading.set(true);
    this.error.set(null);
    this.weatherService.getWeather().subscribe({
      next: (data) => {
        this.forecasts.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error fetching weather:', err);
        this.error.set('Failed to load weather forecast. Please try again.');
        this.loading.set(false);
      }
    });
  }

  getWeatherIcon(summary: string): string {
    if (!summary) return '🌡️';
    const s = summary.toLowerCase();
    if (s.includes('sunny') || s.includes('hot') || s.includes('warm') || s.includes('balmy') || s.includes('mild')) return '☀️';
    if (s.includes('rain') || s.includes('drizzle') || s.includes('shower')) return '🌧️';
    if (s.includes('snow') || s.includes('freeze') || s.includes('freezing') || s.includes('ice') || s.includes('chilly') || s.includes('cool')) return '❄️';
    if (s.includes('cloud') || s.includes('overcast')) return '☁️';
    if (s.includes('wind') || s.includes('breezy') || s.includes('bracing')) return '💨';
    if (s.includes('thunder') || s.includes('storm')) return '⚡';
    return '🌡️';
  }

  isHot(tempC: number): boolean {
    return tempC > 30;
  }
}