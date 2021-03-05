tamanio = int(input("¿Cuantos grados tiene el primer polinomio?: "))
tamanio2 = int(input("¿Cuantos grados tiene el segundo polinomio?: "))

if(tamanio > tamanio2):
    tamanioDefinitivo = tamanio
else:
    tamanioDefinitivo = tamanio2

for i in range(0, tamanioDefinitivo, 1):
varTemp = int(input("NOTA: debe de ordenar su polinomio\nEjemplo 2x^2 + 1x + 5, lo debe de acomodar la siguiente manera\nPrimer Dato: 2 [Constante]\nSegundo Dato: 2 [Potencia]"))