cd "$(dirname "$0")"

SOURCE_FOLDER="../tools/openapi-generator/.build"

rm -rf $DEST_FOLDER
mkdir -p $DEST_FOLDER
cp $SOURCE_FOLDER/**.ts $DEST_FOLDER