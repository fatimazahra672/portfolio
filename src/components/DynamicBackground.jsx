const DynamicBackground = () => {
  const { scene } = useThree()
  const scroll = useScroll()
  const colorRef = useRef(new THREE.Color('#0a0a0f')) // Couleur de départ

  useFrame(() => {
    const offset = scroll.offset
    
    // Définition des 3 couleurs clés
    const colorStart = new THREE.Color('#050511') // Bleu nuit très sombre
    const colorMiddle = new THREE.Color('#1a0b2e') // Violet très sombre
    const colorEnd = new THREE.Color('#02181b')   // Cyan très sombre

    // Logique de mélange des couleurs
    if (offset < 0.5) {
      // De 0% à 50% : On passe du Bleu au Violet
      // (offset * 2) permet de passer de 0 à 1 rapidement sur la première moitié
      colorRef.current.lerpColors(colorStart, colorMiddle, offset * 2)
    } else {
      // De 50% à 100% : On passe du Violet au Cyan
      // (offset - 0.5) * 2 permet de repartir de 0 pour la deuxième moitié
      colorRef.current.lerpColors(colorMiddle, colorEnd, (offset - 0.5) * 2)
    }

    // On applique la couleur calculée au fond de la scène
    scene.background = colorRef.current
  })

  return null
}