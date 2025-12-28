import { describe, it, expect } from 'vitest';
import { cn } from './utils'; // Import the function we want to test

describe('cn utility function', () => {
  it('should merge tailwind classes correctly', () => {
    // Arrange: Set up our test data
    const class1 = 'bg-red-500';
    const class2 = 'text-white';

    // Act: Call the function
    const result = cn(class1, class2);

    // Assert: Check if the result is what we expect
    expect(result).toBe('bg-red-500 text-white');
  });

  it('should handle conditional classes', () => {
    const isActive = true;
    const result = cn('base-class', isActive && 'active-class');
    expect(result).toBe('base-class active-class');
  });

  it('should ignore falsy values', () => {
    const isActive = false;
    const result = cn(
      'base-class',
      isActive && 'active-class',
      null,
      undefined
    );
    expect(result).toBe('base-class');
  });
});
