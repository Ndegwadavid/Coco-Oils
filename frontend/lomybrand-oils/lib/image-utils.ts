// lib/image-utils.ts
export function getImagePlaceholder(width: number, height: number, color: string = 'e2e8f0') {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='%23${color}'/%3E%3C/svg%3E`
  }
  
  export function getSrcSet(src: string, sizes: number[] = [640, 750, 828, 1080, 1200, 1920]) {
    // Only process URLs that are relative or from the same origin
    if (!src || src.startsWith('data:') || src.startsWith('blob:') || src.startsWith('http')) {
      return undefined
    }
    
    return sizes.map(size => `${src}?w=${size} ${size}w`).join(', ')
  }