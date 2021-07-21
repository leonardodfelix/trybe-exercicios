#!/bin/bash

BOLD='\033[1m'
RED='\033[0;31m'
NC='\033[0m' # no color

# https://stackoverflow.com/questions/13195655/bash-set-x-without-it-being-printed
# third answer in 18/07/2021

shopt -s expand_aliases
_xtrace() {
    case $1 in
        on) set -x ;;
        off) set +x ;;
    esac
}
alias xtrace='{ _xtrace $(cat); } 2>/dev/null <<<'


wait(){
	sleep 1 &> /dev/null
}


# https://unix.stackexchange.com/questions/88472/execute-command-supplied-by-function-parameters

run() {
	wait
	xtrace on
	$@
	xtrace off
	wait
}

# Exercícios
echo -e "\nTrybe - exercícios"

if [[ $1 == "parte I" ]]; then
    # Parte I
	# 1-Criação de arquivos e diretórios
    echo -e "\nParte I\nCriação de arquivos e diretórios"
	
	echo -e "\n1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado ${RED}unix_tests${NC} e navegue até ele."
	run	mkdir unix_tests
	run cd unix_tests
	
	echo -e "\n2. Crie um arquivo de texto com o nome ${RED}trybe.txt${NC}."
	run touch trybe.txt
	
	echo -e "\n3. Crie uma cópia do arquivo ${RED}trybe.txt${NC} com nome ${RED}trybe_backup.txt${NC}."
	run cp trybe.txt trybe_backup.txt
	
	echo -e "\n4. Renomeie o arquivo ${RED}trybe.txt${NC}."
	run mv trybe.txt discovery_trybe.txt
	
	echo -e "\n5. Dentro de ${RED}unix_tests${NC}, crie um novo diretório chamado ${RED}backup${NC}."
	run mkdir backup
	
	echo -e "\n6. Mova o arquivo ${RED}trybe_backup.txt${NC} para o diretório ${RED}backup${NC}."
	run mv trybe_backup.txt backup
	
	echo -e "\n7. Dentro de ${RED}unix_tests${NC}, crie um novo diretório chamado ${RED}backup2${NC}."
	run mkdir backup2
	
	echo -e "\n8. Mova o arquivo ${RED}trybe_backup.txt${NC} da pasta ${RED}backup${NC} para a pasta ${RED}backup2${NC}."
	run mv backup/trybe_backup.txt backup2
	
	echo -e "\n9. Apague a pasta ${RED}backup${NC}."
	run rmdir backup
	
	echo -e "\n10. Renomeie a pasta ${RED}backup2${NC} para ${RED}backup${NC}."
	run mv backup2 backup
	
	echo -e "\n11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele."
	run pwd
	
	echo -e "\n12. Apague o diretório ${RED}backup${NC}."
	run rm -rf backup
	
	echo -e "\n13. Limpe o terminal.\nclear"
	run
	
	echo -e "\n${BOLD}Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :\033[0m\n
		\nInternet
		\nUnix
		\nBash
		\nHTML
		\nCSS
		\nJavaScript
		\nReact
		\nSQL  
		"
	run echo -e "Internet\nUnix\nBash\nHTML\nCSS\nJavaScript\nReact\nSQL" > skills.txt
	
	echo -e "\n14. Mostre na tela as 5 primeiras skills do arquivo ${RED}skills.txt${NC}."
	run head -5 skills.txt
	
	echo -e "\n15. Mostre na tela as 4 últimas skills do arquivo ${RED}skills.txt${NC}."
	run tail -5 skills.txt
	
	echo -e "\n16. Apague todos os arquivos que terminem em ${RED}.txt${NC}."
	run rm *.txt
	
	# 2-Manipulação & Busca
	echo -e "\nManipulação & Busca\n1. Na pasta ${RED}unix_tests${NC}, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:\n
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries""
	curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
	
	echo -e "\n2. Mostre todo o conteúdo do arquivo ${RED}countries.txt${NC} na tela."
	run cat countries.txt
	
	echo -e "\n3. Mostre o conteúdo de ${RED}countries.txt${NC}, página por página, até encontrar a ${RED}Zambia${NC}."
	wait
	run less countries.txt

	echo -e "\n4. Mostre novamente o conteúdo de ${RED}countries.txt${NC} página por página, mas agora utilize um comando para buscar por ${RED}Zambia${NC}."
	run less -p Zambia countries.txt

	echo -e "\n5. Busque por ${RED}Brazil${NC} no ${RED}countries.txt${NC}."
	run grep Brazil countries.txt

	echo -e "\n6. Busque novamente por ${RED}brazil${NC}, mas agora utilizando o lower case."
	run grep -i brazil countries.txt

	echo -e "\nPara os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal."
	echo -e "A cobra-real é a maior cobra venenosa do mundo.\nA jiboia é grande mas não tem por hábito comer pessoas.\nA anaconda amarela, também conhecida como a anaconda do Paraguai.\nA píton-indiana é astuta e se enrola à volta de sua presa, apertando cada vez mais até sufocar.\nA anaconda verde (ou sucuri) é, de longe, a cobra mais gorda de todas!" >> phrases.txt
	run cat phrases.txt

	echo -e "\n7. Busque pelas frases que não contenham a palavra ${RED}fox${NC}."
	run grep -v "fox" phrases.txt

	echo -e "\n8. Conte o número de palavras do arquivo ${RED}phrases.txt${NC}."
	run wc -w phrases.txt

	echo -e "\n9. Conte o número de linhas do arquivo ${RED}phrases.txt${NC}."
	run wc -l phrases.txt

	echo -e "\n10. Crie os arquivos ${RED}empty.tbt${NC} e ${RED}empty.pdf${NC}."
	run touch empty.tbt empty.pdf

	echo -e "\n11. Liste todos os arquivos do diretório ${RED}unix_tests${NC}."
	run ls -a

	echo -e "\n12. Liste todos os arquivos que terminem com ${RED}txt${NC}."
	run ls -a *.txt

	echo -e "\n13. Liste todos os arquivos que terminem com ${RED}tbt${NC} ou ${RED}txt${NC}."
	run ls -a *.{tbt,txt}

	echo -e "\n14. Acesse o manual do comando ${RED}ls${NC}."
	man ls

elif [[ $1 == "parte II" ]]; then
	# Parte II
	# 1-Comandos de Input e Output
	echo -e "\nParte II\n1. Navegue até a pasta ${RED}unix_tests${NC}"
	run cd unix_tests

	echo -e "\n2. Crie um arquivo texto pelo terminal com o nome ${RED}skills2.txt${NC} e adicione os valores ${RED}Internet${NC} , ${RED}Unix${NC} e ${RED}Bash${NC}, um em cada linha."
	run echo -e "Internet\nUnix\nBash" > skills2.txt

	echo -e "\n3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓"
	run echo -e "Git\nGithub\nHTML\nCSS\nJavascript" >> skills2.txt

	echo -e "\n4. Conte quantas linhas tem o arquivo ${RED}skills2.txt${NC}."
	run wc -l skills2.txt

	echo -e "\n5. Crie um arquivo chamado ${RED}top_skills.txt${NC} usando o ${RED}skills2.txt${NC}, contendo as 3 primeiras skills em ordem alfabética."
	run head -3 skills2.txt | sort > top_skills.txt

	echo -e "\n6. Crie um novo arquivo chamado ${RED}phrases2.txt${NC} pelo terminal e adicione algumas frases de sua escolha."
	run echo -e "A cada som me cobro por mais sabedoria\nMas nesse mundo sem sentido, porque minha música faria\nSeria muita utopia viver de poesia
Num país onde pra cada 3 farmácias que abre, fecha uma livraria" > phrases2.txt

	echo -e "\n7. Conte o número de linhas que contêm as letras ${RED}br${NC}."
	run grep br phrases2.txt | wc -l

	echo -e "\n8. Conte o número de linhas que **não** contêm as letras ${RED}br${NC}."
	run grep -v br phrases2.txt | wc -l

	echo -e "\n9. Adicione dois nomes de países ao final do arquivo ${RED}phrases2.txt${NC}."
	run echo -e "Brasil\nChina" >> phrases2.txt

	echo -e "\n10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos ${RED}phrases2.txt${NC} e ${RED}countries.txt"
	run cat {phrases2.txt,countries.txt} > bunch_of_things.txt

	echo -e "\n11. Ordene o arquivo ${RED}bunch_of_things.txt.${NC}"
	run sort -o bunch_of_things.txt bunch_of_things.txt

	wait
elif [[ $1 != {"parte I","parte II"} ]]; then
	echo -e "\nUtilize ${RED}./exercicio.sh 'parte I'${NC} ou ${RED}./exercicio.sh 'parte II'${NC} para executar.\n"
	wait
fi

