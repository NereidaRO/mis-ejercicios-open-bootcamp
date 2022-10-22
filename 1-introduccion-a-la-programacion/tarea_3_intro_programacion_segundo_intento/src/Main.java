public class Main {
    public static void main(String[] args) {
        int param1=1;
        int param2=2;
        int param3=3;
        var addition = suma(param1, param2, param3);
        System.out.println(addition);

        Coche miCoche = new Coche();
        var moreDoorsResult = miCoche.masPuertas();
        System.out.println(moreDoorsResult);
    }

    public static int suma(int a, int b, int c){
        return a + b + c;
    }
    static class Coche{
        int door=4;
        int masPuertas() {return door+1;};
    }
//Solución: https://github.com/Open-Bootcamp/ResolucionEjercicios/tree/main/Introducci%C3%B3n%20a%20la%20programaci%C3%B3n/Tema%203
}

