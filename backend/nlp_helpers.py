from nltk import sent_tokenize, word_tokenize


def annotate(sentence: str, lower=True) -> dict:
    words, gloss, after = [], [], []
    for s in sent_tokenize(sentence):
        for t in word_tokenize(s):
            words.append(t)
            gloss.append(t)
            after.append(' ')
    if lower:
        words = [w.lower() for w in words]
    return {
        'gloss': gloss,
        'words': words,
        'after': after,
        }
