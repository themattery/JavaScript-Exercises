import java.util.Scanner;


public class Main {
    public static void main(String[] args) {
        String[] gabaritoArr;
        String[] alunoResArr;
        String gabarito, alunoRes;
        int numAcertos = 0;

        Scanner teclado = new Scanner(System.in);

//        lendo gabarito
        gabarito = teclado.nextLine();
        gabaritoArr = gabarito.split("");

//        lendo resposta
        alunoRes = teclado.nextLine();
        alunoResArr = alunoRes.split("");

//        comparando gabarito e resposta
        for (int i = 0; i < gabaritoArr.length; i++) {
            if (alunoResArr[i].equals(gabaritoArr[i])) {
                numAcertos++;
            }
        }
//        print num acertos
        System.out.println("Número de acertos: " + numAcertos);


    }
}