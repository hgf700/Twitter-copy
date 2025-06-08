from tokenizers import Tokenizer,pre_tokenizers
from tokenizers.models import BPE
from tokenizers.pre_tokenizers import Whitespace
from tokenizers.trainers import BpeTrainer
from tokenizers import CharBPETokenizer
from datasets import load_dataset

dataset = load_dataset("wikipedia", "20220301.en",  split="train[:1%]")
texts = dataset['text']  

tokenizer = Tokenizer(BPE(unk_token="[UNK]"))

tokenizer.pre_tokenizer = Whitespace()

trainer = BpeTrainer(
    vocab_size=3000,
    min_frequency=2,
    initial_alphabet=pre_tokenizers.ByteLevel.alphabet(),
    special_tokens=["[UNK]", "[CLS]", "[SEP]", "[PAD]", "[MASK]"]
    )

tokenizer.train_from_iterator(texts, trainer=trainer)

tokenizer.save("tokenizer-wiki.json", pretty=True)

encoded = tokenizer.encode("I can feel the magic, can you?")
print(encoded.ids)
print(encoded.tokens)

output = tokenizer.encode("Hello, y'all! How are you 😁 ?")
print(output.tokens)
