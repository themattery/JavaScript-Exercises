// Java Stack

import java.util.ArrayList;

public class Pilha {
    private ArrayList<String> dados = new ArrayList<>();

    public void empilhar(String elemento) {
        dados.add(elemento);
    }

    public void desempilhar() {
        int tamanho = dados.size();
        int ultimo = tamanho-1;
        dados.remove(ultimo);
    }

    public String topo() {
//        int tamanho = dados.size();
//        int ultimo = tamanho-1;
        if (tamanho() > 0)
            return dados.getLast();
        else
            return "Não tem topo";

    }

    public int tamanho() {
        return dados.size();
    }

    public void esvaziar() {
//        while (tamanho() > 0) {
//            desempilhar();
//        }
        dados.clear();
    }





}
