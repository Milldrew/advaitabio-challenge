NAME="$1"
TYPE="$2"
OPTION="$3"
echo 'Name: '$NAME
echo 'Type: '$TYPE
echo 'Option: '$OPTION
yarn ng generate $TYPE $NAME --project d3plot $3
